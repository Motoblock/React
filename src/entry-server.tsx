import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './store';

export const render = (url: string, options?: object) => {
  // console.log('url', url);
  // console.log('opts', options);
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}></StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  );
};
