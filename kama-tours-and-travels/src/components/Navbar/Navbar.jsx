
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import kamal_logo from '/kamal_logo_mono.png';

const closeMenu = () => setMobileMenuOpen(false);

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setDropdownOpen(false);

    return (
        <div className="nav">
            <img src={kamal_logo} alt="kamal Logo" className="logo" />

            <div className={`navlinks ${isMobileMenuOpen ? 'open' : ''}`}>
                <li>
                    <NavLink
                        to="/"
                        end
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/services"
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}
                    >
                        Services
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}
                    >
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? 'active_link' : 'inactive_link'}
                    >
                        Contact Us
                    </NavLink>
                </li>


            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </div>
    );
};

export default Navbar;
