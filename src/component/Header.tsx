import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/logo.png';

export const Header = () => {
  const [title, setTitles] = useState('');

  // useEffect(() => {
  //   switch (location.pathname) {
  //     case '/':
  //       setTitles('Main page');
  //       break;
  //     case '/about':
  //       setTitles('About page');
  //       break;
  //     case '/forms':
  //       setTitles('Forms page');
  //       break;
  //     default:
  //       setTitles('page 404');
  //   }
  // });

  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="header__menu">
        <NavLink onClick={() => setTitles('Main page')} className="item" to="/">
          Main
        </NavLink>
        <NavLink onClick={() => setTitles('About page')} className="item" to="/about">
          About
        </NavLink>
        <NavLink onClick={() => setTitles('Forms page')} className="item" to="/forms">
          Forms
        </NavLink>
      </nav>
    </div>
  );
};
