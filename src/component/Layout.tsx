import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

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
              <div className="footer__item">2023</div>
              <div className="footer__item">All Rights Reserved © motoblock, 2023</div>
              <div className="footer__item">2023</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export { Layout };
