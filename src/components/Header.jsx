import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../assets/logo.png';
// import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
        <img className='img' src={svg} alt= "Logo"/>;

        <main>
            <Link smooth to={"/#home"}>Home</Link>
            <Link smooth to={"/contact"}>Contact</Link>
            <a href={"/#about"}> About</a>
            <a href={"/#brands"}>Brands</a>
            <a href={"/#services"}>Services</a>
        </main>
    </nav>
  )
}

export default Header