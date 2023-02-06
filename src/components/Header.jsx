import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../assets/logo.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
        <img className='img' src={svg} alt= "Logo"/>;

        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}> About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
        </main>
    </nav>
  )
}

export default Header;