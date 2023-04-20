import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';
import express from 'express';
import { ViteDevServer, createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
const isProd = !process.env.NODE_ENV;
console.log(isProd);
const resolve = (p: string) => path.resolve(__dirname, p);
const PORT = 3000;

export async function createServer() {
  let vite: ViteDevServer;
  const app = express();

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use((await import('compression')).default());
    app.use(
      (await import('serve-static')).default(resolve('dist/client'), {
        index: false,
      })
    );
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let modelPage: string, render;
      if (!isProd) {
        modelPage = await readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
        modelPage = await vite.transformIndexHtml(url, modelPage);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        modelPage = await readFile(resolve('dist/client/index.html'), 'utf-8');

        // eslint-disable-next-line
        // @ts-ignore
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const parts = modelPage.split('<!--ssr-body-->');

      const { pipe } = await render(url, {
        onShellReady() {
          res.write(parts[0]);
          pipe(res);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        !isProd && vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });
  return { app };
}

// if (!isProd) {
createServer()
  .then(({ app }) =>
    app.listen(PORT, () => {
      console.log('http://localhost:' + PORT);
    })
  )
  .catch((e) => console.error(e));
// }
