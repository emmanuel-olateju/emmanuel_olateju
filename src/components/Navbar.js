import './Navbar.css'

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <div className='navbar' position="static">
        <div className='nav-logo'></div>
        <ul className='nav-sections-links'>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#projects">Skills</a>
            </li>
            <li>
                <a href="#contact">Stacks/Tools</a>
            </li>
            <li>
                <a href="#contact">Others</a>
            </li>
        </ul>
        <ul className='nav-social-media'>
            <li>
                <a href="https://www.linkedin.com/in/emmanuel-olateju-aeon/"><LinkedInIcon className='linkedin'/></a>
            </li>
            <li>
                <a href="https://github.com/emmanuel-olateju"><GitHubIcon className='github'/></a>
            </li>
            <li>
                <a href="https://twitter.com/__petron"><TwitterIcon className='twitter'/></a>
            </li>
        </ul>
    </div>
  );
};

export default Navbar;