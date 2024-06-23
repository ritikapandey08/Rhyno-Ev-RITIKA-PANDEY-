import React, { useState, useEffect } from 'react';
import logo from '../images/rhyno_logo.jpeg'; // Adjust the path based on your project structure
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li>
                    <Link to="header" smooth={true} duration={1000}>
                        Header
                    </Link>
                </li>
                <li>
                    <Link to="features" smooth={true} duration={1000}>
                        Features
                    </Link>
                </li>
                <li>
                    <Link to="offer" smooth={true} duration={1000}>
                        Offer
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={1000}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={1000}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
