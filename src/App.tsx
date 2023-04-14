import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { Main } from './page/main/main';
import { Page404 } from './page/404/404';
import { About } from './page/about/about';
import { Forms } from './page/forms/forms';

const App = () => {
  return (
    <div className="App">
      <header>
        <nav className="py-7 bg-gray-100">
          <ul className="flex justify-center gap-x-14">
            <li className="transition ease-in duration-300 hover:scale-110">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'underline scale-105 font-bold' : 'no-underline font-semibold'
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="transition ease-in duration-300 hover:scale-110">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'underline scale-105 font-bold' : 'no-underline font-semibold'
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="transition ease-in duration-300 hover:scale-110">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'underline scale-105 font-bold' : 'no-underline font-semibold'
                }
                to="/form"
              >
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Forms />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
