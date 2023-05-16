import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaFacebookF, FaVimeoV, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialGooglePlus } from 'react-icons/ti';
import getCurrentDate from '../common/utils';
import token from '../redux/Auth/token';
import navbar from '../styles/Navbar.module.css';
import logo from '../assets/images/logo.png';

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
  const accessControl = token();
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState('');
  const location = useLocation();

  let myUser = localStorage.getItem('user');
  if (myUser) myUser = JSON.parse(myUser);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };
  useEffect(() => {
    switch (location.pathname) {
      case '/add-car':
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
            <NavLink to="/" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Cars
            </NavLink>
            {
              accessControl ? (
                <>
                  <NavLink to="/reservation" style={handleActive} className={navbar.link} onClick={toggleMenu}>
                    Reservation
                  </NavLink>
                  <NavLink to="/my-reservation" style={handleActive} className={navbar.link} onClick={toggleMenu}>
                    My Reservation
                  </NavLink>
                  {
                  myUser?.payload.role === 'admin' ? (
                    <>
                      <NavLink to="/add-car" style={handleActive} className={navbar.link} onClick={toggleMenu}>
                        Add Car
                      </NavLink>
                      <NavLink to="/delete-car" style={handleActive} className={navbar.link} onClick={toggleMenu}>
                        Delete Car
                      </NavLink>
                    </>
                  ) : (<></>)
                    }
                  <NavLink to="/" className={navbar.logout} onClick={handleLogout}>
                    Log out
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/register" className={navbar.signup} onClick={toggleMenu}>
                    Sign Up
                    {' '}
                  </NavLink>
                  <NavLink to="/login" className={navbar.login} onClick={toggleMenu}>
                    Log In
                    {' '}
                  </NavLink>
                </>
              )
            }

            <div className={navbar.nav__footer}>
              <div className={navbar.social__icons}>
                <NavLink to="https://twitter.com/" className={navbar.social_links}>
                  <AiOutlineTwitter />
                </NavLink>
                <NavLink to="https://facebook.com/" className={navbar.social_links}>
                  <FaFacebookF />
                </NavLink>
                <NavLink to="https://www.google.com/" className={navbar.social_links}>
                  {' '}
                  <TiSocialGooglePlus />
                </NavLink>
                <NavLink to="https://www.vimo.me/" className={navbar.social_links}>
                  {' '}
                  <FaVimeoV />
                </NavLink>
                <NavLink to="https://www.pinterest.com/" className={navbar.social_links}>
                  {' '}
                  <FaPinterestP />
                </NavLink>
              </div>
              <div className={navbar.copyright}>
                &copy;
                {getCurrentDate()}
                {' '}
                & Car Reservation
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
