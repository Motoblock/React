import { Routes, Route } from 'react-router-dom';
import Main from './page/main/main';
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
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
