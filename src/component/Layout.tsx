import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import github from './../assets/images/github.png';
import rsschool from './../assets/images/rs_school_js.svg';

const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="header__container">
            <div className="header__menu">
              <nav className="nav">
                <NavLink className="item" to="/">
                  Home
                </NavLink>
                <NavLink className="item" to="/about">
                  About
                </NavLink>
              </nav>
            </div>
          </div>
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <div className="footer__container">
            <div className="footer__items">
              <div className="footer__item">
                <a href="https://motoblock.github.io/" target="_blank" rel="noreferrer">
                  <img src={github} alt="github" />
                </a>
              </div>
              <div className="footer__item">All Rights Reserved © motoblock, 2023</div>
              <div className="footer__item">
                <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
                  <img src={rsschool} className="rsschool" alt="rsschool" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export { Layout };
