import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './store';

export const render = (url: string, opts?: object) => {
  console.log('url', url);
  console.log('opts', opts);
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}></StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
};
