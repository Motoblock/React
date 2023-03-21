import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Main } from './page/main/main';
import Forms from './page/forms/forms';
import About from './page/about/about';
import Page404 from './page/404/404';
import { Layout } from './component/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'forms',
        element: <Forms />,
      },
      {
        path: '404',
        element: <Page404 />,
      },
    ],
  },
  {
    path: '/404',
    element: <Layout />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]);

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Main />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/forms" element={<Forms />} />
//           <Route path="/404" element={<Page404 />} />
//           <Route path="*" element={<Navigate to="/404" replace />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

export default router;
