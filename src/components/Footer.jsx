import React from 'react'
import footerLogo from '../assets/footerLogo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-link-container'>
                <a href='#'>
                <img src={footerLogo} className='footer-logo' alt='footer-logo'/>
                </a>
                
            </div>
            <div className='footer-link-container'>
                <h3 className='footer-link-header'>Menu</h3>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">Home</a>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">Converter</a>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">How it works</a>
            </div>
            <div className='footer-link-container'>
                <h3 className='footer-link-header'>About Us</h3>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">About</a>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">Contact Us</a>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">Privacy Policy</a>
            </div>
            <div className='footer-link-container'>
                <h3 className='footer-link-header'>Screen Record</h3>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">Browse Window</a>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">Desktop</a>
                <a className='footer-link' href="https://www.linkedin.com/in/joshua-harris/" target="_blank" rel="noreferrer">Application</a>
            </div>
        </div>
    </div>
  )
}

export default Footer