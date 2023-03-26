import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './page/main/main';
import About from './page/about/about';
import Page404 from './page/404/404';
import { Layout } from './component/Layout';

import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
