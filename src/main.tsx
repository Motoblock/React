import React, { HtmlHTMLAttributes } from 'react';
import { hydrateRoot } from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

// import { store } from './store/index';
// import { router } from './router';
import { Footer } from './component/Footer';
import './index.css';
import ReactDOM from 'react-dom';

// ReactDOM.hydrate(<Footer />, document.getElementById('root'));
// hydrateRoot(document, <App />);
hydrateRoot(document.getElementById('root') as HTMLHtmlElement, <Footer />);

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
