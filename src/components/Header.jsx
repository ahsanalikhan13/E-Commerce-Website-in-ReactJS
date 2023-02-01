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
            <Link to={"/#about"}> About</Link>
            <Link to={"/#brands"}>Brands</Link>
            <Link to={"/#services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header