import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { router } from './router';
import './index.css';
import ReactDOM from 'react-dom';

const root = document.getElementById('root') as HTMLElement;
// const renderMethod = root ? ReactDOM.render : ReactDOM.hydrate;
// if (root && root.innerHTML !== '')
if (root) {
  hydrateRoot(
    root,
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
    root
  );
}

// function renderMethod(arg0: JSX.Element, root: HTMLElement) {
//     throw new Error('Function not implemented.');
// }
// import React from 'react';
// import { hydrateRoot } from 'react-dom/client';
// // import { RouterProvider } from 'react-router-dom';
// // import ReactDOM from 'react-dom/client';
// // import { Provider } from 'react-redux';

// // import { store } from './store/index';
// // import { router } from './router';
// import { Footer } from './component/Footer';
// import './index.css';
// // import ReactDOM from 'react-dom';

// // ReactDOM.hydrate(<Footer />, document.getElementById('root'));
// // hydrateRoot(document, <App />);
// hydrateRoot(document.getElementById('root') as HTMLHtmlElement, <Footer />);

// const domNode = document.getElementById('root');
// const root = hydrateRoot(domNode, reactNode);

// ReactDOM.hydrate(<Footer />, document.getElementById('root'));

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>
// );
