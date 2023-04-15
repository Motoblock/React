import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Main } from './page/main/main';
import { Page404 } from './page/404/404';
import { About } from './page/about/about';
import { Forms } from './page/forms/forms';
import { Header } from './component/Header';
import { Footer } from './component/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
