import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../assets/images/logo.png';
import meow from './../assets/cat-meow.mp3';

function menu(path: string) {
  switch (path) {
    case '/':
      return 'On the main page, try clicking on the logo';
    case '/about':
      return 'About page';
    case '/forms':
      return 'New cats are born on the form page';
    default:
      return 'The page 404 is very sad';
  }
}
export const Header = () => {
  const [title, setTitles] = useState('');

  useEffect(() => {
    setTitles(menu(location.pathname));
  }, []);

  const audio = new Audio(meow);
  const start = () => {
    audio.play();
  };

  return (
    <>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} title="Click me!" onClick={start} alt="logo" />
        </div>
        <nav className="header__menu">
          <NavLink
            onClick={() => setTitles('On the main page, try clicking on the logo')}
            className="item"
            to="/"
          >
            Main
          </NavLink>
          <NavLink onClick={() => setTitles('About page')} className="item" to="/about">
            About
          </NavLink>
          <NavLink
            onClick={() => setTitles('New cats are born on the form page')}
            className="item"
            to="/forms"
          >
            Forms
          </NavLink>
        </nav>
      </div>
      <div className="header__name">
        <h1>{title}</h1>
      </div>
    </>
  );
};
