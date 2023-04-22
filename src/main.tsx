import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createAppStore } from './store/index';
import App from './App';
import './index.css';

const store = createAppStore(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

window.addEventListener('load', () => {
  document.getElementById('preloaded-state')?.remove();
});

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);

declare global {
  interface Window {
    __PRELOADED_STATE__?: object;
  }
}
