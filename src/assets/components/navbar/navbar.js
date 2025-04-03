import React from 'react';
import './navbar.css';
const Navbar = () => {
    return (
      <nav className='navbar bg-body-primary border-bottom'>
        <div className='container'>
          <span className='navbar-brand mb-0 fs-2' id='navbar'>UniVault</span>
          <span className='btn'>Manage Content</span>
        </div>
      </nav>
    );
};

export default Navbar;