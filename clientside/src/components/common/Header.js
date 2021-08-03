import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const showSideBar = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setWindowSize((window.innerWidth - 1217) / 2);
    } else {
      setWindowSize(10);
    }
  }, []);

  return (
    <header style={{ margin: `0 ${windowSize}px` }}>
      <div className={clicked ? "opacity" : ""} onClick={showSideBar}></div>

      <nav className='nav'>
        <div className={clicked ? "nav-menu active" : "nav-menu"}>
          <ul className='nav__list'>
            <div className='menu-icon' onClick={showSideBar}>
              <img
                src='images/bars.svg'
                alt='Menu bars'
                className='menu_bars'
              />
            </div>
            <Link to='/'>
              <img className='navbar-logo' src='images/logo.svg' alt='logo' />
            </Link>
            <li className='nav__list-item nav__list-item--services'>
              <Link to='/service'>Service</Link>
            </li>
            <li className='nav__list-item nav__list-item--about'>
              <Link to='/about'>About</Link>
            </li>
            <li className='nav__list-item nav__list-item--contact'>
              <Link to='/about'>Contact</Link>
            </li>
            <li className='nav__list-item nav__list-item--sign_in'>
              <Link to='/sign-in'>Sign In</Link>
            </li>
            <li className='nav__list-item'>
              <Link to='/login'>Join</Link>
            </li>
          </ul>

          {/* Sidebar section */}

          <div className={clicked ? "side-bar active" : "side-bar"}>
            <div className='side-bar-menu' onClick={showSideBar}>
              <Link className='nav-link side-services' to='/services'>
                <i className='fas fa-briefcase'></i> Services
              </Link>
              <Link className='nav-link side-contact' to='/about'>
                Contact
              </Link>
              <Link className='nav-link side-sign-in' to='/contact'>
                Sign IN
              </Link>

              <Link className='nav-link side-join' to='/contact'>
                Join
              </Link>
            </div>
          </div>

          {/* navigation bar section */}
        </div>
      </nav>
    </header>
  );
};
export default Header;
