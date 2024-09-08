import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo123 from '../assets/logo123.jpg';

const Navbar = () => {
    const activeClass = 'active';
    const [menu, setMenu] = useState('home');
    const [userName, setUserName] = useState(null);
    const [showLogoutPopup, setShowLogoutPopup] = useState(false); // State to manage the logout popup visibility

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('userName'));
        if (loggedInUser) {
            setUserName(loggedInUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userName'); 
        setUserName(null);
        setShowLogoutPopup(true); // Show the logout popup

        setTimeout(() => {
            setShowLogoutPopup(false); // Hide popup after 3 seconds
        }, 3000);
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img className='img1' src={logo123} alt='' />
                <p>CAREER INSIGHT</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu('home')}>
                    <NavLink style={{ textDecorationLine: 'none' }} to="/" className={({ isActive }) => isActive ? activeClass : ''}>
                        Home
                    </NavLink>
                    {menu === 'home' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('companies')}>
                    <NavLink style={{ textDecorationLine: 'none' }} to="/companies" className={({ isActive }) => isActive ? activeClass : ''}>
                        Companies
                    </NavLink>
                    {menu === 'companies' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('about')}>
                    <NavLink style={{ textDecorationLine: 'none' }} to="/about" className={({ isActive }) => isActive ? activeClass : ''}>
                        About
                    </NavLink>
                    {menu === 'about' ? <hr /> : <></>}
                </li>
                <li onClick={() => setMenu('latestjobs')}>
                    <NavLink style={{ textDecorationLine: 'none' }} to="/latestjobs" className={({ isActive }) => isActive ? activeClass : ''}>
                        Latestjobs
                    </NavLink>
                    {menu === 'latestjobs' ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                {userName ? (
                    <>
                        <span>Welcome, {userName}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <NavLink to="/login" className={({ isActive }) => isActive ? activeClass : ''}>
                        <button>Login</button>
                    </NavLink>
                )}
            </div>

            {showLogoutPopup && (
                <div className="logout-popup">
                    <div className="red-line"></div>
                    <p>You have successfully logged out!</p>
                </div>
            )}
        </div>
    );
};

export default Navbar;
