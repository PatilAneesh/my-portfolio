import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Home from './Home.js';
const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-center p-2">
        <ul className="list d-flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <Home />
    </>
  );
};

export default Header;
