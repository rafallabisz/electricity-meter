import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import './Navbar.sass';

const Navbar: React.FC = () => {
  return (
    <nav className={`navbar navbar-light nav-bg`}>
      <ul className="navbar-nav nav-wrap">
        <li className="nav-item active">
          <NavLink to={routes.main} className="nav-link">
            LICZNIK
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink to={routes.dashboard} className="nav-link">
            WYKRESY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;