import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fish-gallery">Fish Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/tank-calculator">Tank Calculator</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
