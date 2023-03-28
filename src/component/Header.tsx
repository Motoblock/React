import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/logo.png';

interface IProps {
  [title: string]: string;
}

export class Header extends Component<IProps, { title: string }> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    switch (location.pathname) {
      case '/':
        this.setState({ title: 'Main page' });
        break;
      case '/about':
        this.setState({ title: 'About page' });
        break;
      case '/forms':
        this.setState({ title: 'Forms page' });
        break;
      default:
        this.setState({ title: 'page 404' });
    }
  }

  render() {
    return (
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <h1>{this.state.title}</h1>
        </div>
        <div className="header__menu">
          <nav className="nav">
            <NavLink onClick={() => this.setState({ title: 'Main page' })} className="item" to="/">
              Main
            </NavLink>
            <NavLink
              onClick={() => this.setState({ title: 'About page' })}
              className="item"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => this.setState({ title: 'Forms page' })}
              className="item"
              to="/forms"
            >
              Forms
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}
