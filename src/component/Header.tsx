import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './../store/hooksRedux';
import { swowHeader } from './../store/headerSlice';
import logo from './../assets/images/logo.png';
import { menu } from './util/menu';

export const Header = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.header.title);

  const setTitles = (path: string) => {
    dispatch(swowHeader(menu(path)));
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} title="me-u!" alt="logo" />
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
    </header>
  );
};
