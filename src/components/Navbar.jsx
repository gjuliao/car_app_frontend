import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import navbar from '../styles/Navbar.module.css'
import logo from '../assets/images/logo.png'

const handleActive = ({ isActive }) => (isActive
  ? {
    backgroundColor: '#95C010',
    color: 'white',
    textDecoration: 'none',
    transition: '0.5s ease-out',
  }
  : {
    color: 'black',
  });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState('');
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);
const handleLogout = () => {
  
}
  useEffect(() => {
    switch (location.pathname) {
      case '/add-cars':
        setMenuItems('white-bars');
        break;
      case '/reservation':
        setMenuItems('white-bars');
        break;
      default:
        setMenuItems('');
    }
  }, [location.pathname]);

  return (
    <>
      <div className="sidebar">
        <nav className={navbar.nav}>
          <div role="presentation" className={`${navbar.menuIcon} ${isOpen ? navbar.open : ''}`} onClick={toggleMenu}>
            <div id={`${isOpen ? '' : menuItems}`} className={`${isOpen ? navbar.menuIconCross : navbar.menuIconLines} ${isOpen ? navbar.firstBar : ''}`} />
            <div id={`${isOpen ? '' : menuItems}`} className={`${isOpen ? navbar.menuIconCross : navbar.menuIconLines} ${isOpen ? navbar.secondBar : ''}`} />
          </div>
          <div className={`${navbar.menuItems} ${isOpen ? navbar.open : ''}`}>
            <img src={logo} alt="Logo" className={navbar.logo} />
            <NavLink to="/cars" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Cars
            </NavLink>
            <NavLink to="/reservation" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Reservation
            </NavLink>
            <NavLink to="/my-reservation" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              My Reservation
            </NavLink>
            <NavLink to="/add-car" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Add car
            </NavLink>
            <NavLink to="/delete-car" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Delete car
            </NavLink>
            <NavLink to="/" style={handleActive} className={navbar.link} onClick={handleLogout}>
              Log out
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar