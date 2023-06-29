import React from 'react';

const NavBar = ({ handleNavClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleNavClick('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleNavClick('fishGallery')}>Fish Gallery</button>
        </li>
        <li>
          <button onClick={() => handleNavClick('tankCalculator')}>Tank Calculator</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
