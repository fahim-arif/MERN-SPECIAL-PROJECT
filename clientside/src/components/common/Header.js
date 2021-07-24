import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const showSideBar = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={clicked ? "opacity" : ""} onClick={showSideBar}></div>
      <nav className='navbar-items'>
        <div className='menu-icon' onClick={showSideBar}>
          <i className='fas fa-bars'></i>
        </div>
        <Link to='/'>
          <img className='navbar-logo' src='images/logo4.png' alt='logo' />
        </Link>
        {/* Sidebar section */}

        <div className={clicked ? "side-bar active" : "side-bar"}>
          {/* <div className='menu-icon' onClick={showSideBar}>
            <i className='fas fa-times'></i>
          </div> */}
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
        <div className={clicked ? "nav-menu active" : "nav-menu"}>
          <Link className='nav-link nav-services' to='/services'>
            <i className='fas fa-briefcase'></i> Services
          </Link>
          <Link className='nav-link nav-contact' to='/contact-us'>
            Contact
          </Link>
          <Link className='nav-link nav-sign-in' to='/sign-in'>
            Sign IN
          </Link>
          <Link className='nav-link nav-join' to='/login'>
            Join
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Header;
