import React from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
     <div className='logo'>
      <Link to='/'>
      <img src='/logo.png' alt="Logo" />
      </Link>
     </div>
     <nav className='nav'>
      <Link to =''>
       <p className='nav-link' href='#'>
        Features
       </p>

      </Link>
      <Link to = '/file/Untitled_Video_20232509 ' >
       <p className='nav-link' href='#'>
        How it works
       </p>
       </Link>
     </nav>
     <div className='nav-btns'>
      <Link to='/'>
       <button className='nav-btn'>
        Get started
       </button>

      </Link>
     </div>
    </div>
  )
}

export default Header