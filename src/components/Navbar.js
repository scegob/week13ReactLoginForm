import React from 'react';

const navbar= () =>{
  return (
  <nav className="navbar">
    <ul>
        <h1>Navbar</h1>
        <li className="nav-item">
            <a href="#">Home</a>
        </li>
        <li className="nav-item">
            <a href="#"><b>About</b></a>
        </li>
        <li className="nav-item">
            <a href="#"><b>Contact</b></a>
        </li>
    </ul>
  </nav>
  );
}
export default navbar;
