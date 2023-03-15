import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
interface Props {
  [title: string]: string;
}

class Header extends Component<Props, { title: string }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    if (location.pathname === '/') this.setState({ title: 'Home page' });
    if (location.pathname === '/about') this.setState({ title: 'About page' });
  }
  render() {
    return (
      <div className="header__container">
        <div className="header__logo">
          <h1>{this.state.title}</h1>
        </div>
        <div className="header__menu">
          <nav className="nav">
            <NavLink onClick={() => this.setState({ title: 'Home page' })} className="item" to="/">
              Main
            </NavLink>
            <NavLink
              onClick={() => this.setState({ title: 'About page' })}
              className="item"
              to="/about"
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
