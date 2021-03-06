import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';

class Header extends Component {

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Found In Effort Admin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <Link to="/motivations">Motivations</Link>
          </li>
          <li>
            <a href="#">Mentors</a>
          </li>
        </ul>
      </nav>
    );
  };
}

export default Header;