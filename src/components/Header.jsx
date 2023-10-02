import React from 'react';
import '../styles/header.scss';

const Header = () => {
  return (
    <div className='header'>
     <div className='logo'>
      <img src='/logo.png' alt="Logo" />
     </div>
     <nav className='nav'>
       <a className='nav-link' href='#'>
        Features
       </a>
       <a className='nav-link' href='#'>
        How it works
       </a>
     </nav>
     <div className='nav-btns'>
       <button className='nav-btn'>
        Get started
       </button>
     </div>
    </div>
  )
}

export default Header