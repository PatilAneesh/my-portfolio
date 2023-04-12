import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <>
      <div className="header d-flex justify-content-center p-2">
        <ul className="list d-flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
