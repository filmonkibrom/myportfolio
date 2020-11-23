import React from 'react';
//import { NavLink } from 'react-router-dom';
//import {Link} from 'react-scroll'
import './header.styles.scss';


const Header = () => (
  <div className='header'>
    <div className='options'>
      <a className='option' href='/#about' >
        About
      </a>
      <a className='option'  href="#experience" >
      Experience
      </a>
      <a className='option'  href="#projects" >
      Projects
      </a>
      <a className='option' href='/#skills' >
          Skills
      </a>
      <a className='option' href='/#contact' >
          Contact Me
      </a>
    </div>
  </div>
);


export default Header;


