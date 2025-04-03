import React from 'react';
import './navbar.css';
const Navbar = () => {
    return (
      <nav class='navbar bg-body-primary border-bottom'>
        <div class='container'>
          <span class='navbar-brand mb-0 fs-2' id='navbar'>UniVault</span>
          <span class='btn'>Manage Content</span>
        </div>
      </nav>
    );
};

export default Navbar;