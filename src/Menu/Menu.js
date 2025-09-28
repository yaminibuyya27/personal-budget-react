import React from 'react';
import { Link } from "react-router";


function Menu() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="https://google.com">Google</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;
