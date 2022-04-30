import React from 'react';
import {Place, MonetizationOn, Facebook, Twitter, Instagram, LinkedIn, FeaturedPlayList } from '@mui/icons-material';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-black p-0'>
      <div className="container py-1">
        <label 
            type='button'
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#mobileNav'
            aria-controls='mobileNav'
            aria-expanded='false'
            aria-label='toggle navigation'
        >
            <span className='navbar-toggler-icon'></span>
        </label>
        <div className="collapse navbar-collapse" id="mobileNav">
            <ul className="navbar-nav text-center px-3 ">
                <li className="nav-item mx-3"><a href='#about' className="nav-link text-light"><Place className='text-primary'/> About us</a></li>
                <li className="nav-item mx-3"><a href='#features' className="nav-link text-light"><FeaturedPlayList className='text-primary'/> Features</a></li>
                <li className="nav-item mx-3"><a href='#pricing' className="nav-link text-light"><MonetizationOn className='text-primary'/> Pricing</a></li>
            </ul>
            
            <ul className="navbar-nav ms-auto text-center px-3 text-light">
                <li className="nav-item mx-2"><a href='/' className="nav-link text-light"><Facebook/> </a></li>
                <li className="nav-item mx-2"><a href='/' className="nav-link text-light"><Twitter/></a></li>
                <li className="nav-item mx-2"><a href='/' className="nav-link text-light"><Instagram/></a></li>
                <li className="nav-item mx-2"><a href='/' className="nav-link text-light"><LinkedIn/></a></li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;