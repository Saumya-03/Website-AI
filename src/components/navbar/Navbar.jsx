import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
export default function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gtp3__navbar-links_container'>
          <p><a href='#home'> Home</a></p>
          <p><a href='#wgpt3'> what is GPT</a></p>
          <p><a href='#possibility'> Open AI</a></p>
          <p><a href='#features'> Case Studies</a></p>
          <p><a href='#blog'> Library</a></p>
        </div>
      </div>
      <div className='gtp3__navbar-sign'>
      <p> Sign in</p>
      <button type='button'>
      Sign up
      </button>
      </div>
    </div>
  )
}
