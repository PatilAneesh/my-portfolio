import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-center p-2">
        <ul className="list d-flex">
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <button>Skills</button>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
