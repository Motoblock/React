import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './../store/hooksRedux';
import { swowHeader } from './../store/headerSlice';
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
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.header.title);

  const setTitles = (path: string) => {
    dispatch(swowHeader(menu(path)));
  };

  useEffect(() => {
    dispatch(swowHeader(menu(location.pathname)));
  }, [dispatch]);

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
          <NavLink onClick={() => setTitles('/')} className="item" to="/">
            Main
          </NavLink>
          <NavLink onClick={() => setTitles('/about')} className="item" to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setTitles('/forms')} className="item" to="/forms">
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
