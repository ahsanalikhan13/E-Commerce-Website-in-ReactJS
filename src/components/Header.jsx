import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../assets/logo.png';

const Header = () => {
  return (
    <nav>
        <img className='img' src={svg} alt= "Logo"/>;

        <main>
            <Link to={"/"}>Home</Link>
            <Link to={"/contact"}>Contact</Link>
            <a href={"/#about"}> About</a>
            <a href={"/#brands"}>Brands</a>
            <a href={"/#services"}>Services</a>
        </main>
    </nav>
  )
}

export default Header