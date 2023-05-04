import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
// icons
import {FaFacebookF, FaVimeoV, FaPinterestP } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import {TiSocialGooglePlus} from 'react-icons/ti'
// assets
import navbar from '../styles/Navbar.module.css'
import logo from '../assets/images/logo.png'
import { getCurrentDate } from '../common/utils';

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
          <div role="presentation" className={`${navbar.menu__bars} ${isOpen ? navbar.open : ''}`} onClick={toggleMenu}>
            <div id={`${isOpen ? '' : menuItems}`} className={`${isOpen ? navbar.menu__close : navbar.menu__lines} ${isOpen ? navbar.menubar__firstLine : ''}`} />
            <div id={`${isOpen ? '' : menuItems}`} className={`${isOpen ? navbar.menu__close : navbar.menu__lines} ${isOpen ? navbar.menubar__secondLine : ''}`} />
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
          <div className={navbar.nav__footer}>
            <div className={navbar.social__icons}>
            <AiOutlineTwitter/>
            <FaFacebookF/>
            <TiSocialGooglePlus />
            <FaVimeoV />
            <FaPinterestP/>
            </div>
            <div className={navbar.copyright}>
            &copy;{getCurrentDate()} & Car Reservation
            </div>
          </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar