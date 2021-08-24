import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { margin } from "../../actions/marginActions";
// import { userLogout } from "../../actions/userActions" ;

import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import avatar from "../images/photo-1534665482403-a909d0d97c67.jpg";
import "../../css/Header.css";
import "./topbar.css";
const Topbar = () => {
  const [clicked, setClicked] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const dispatch = useDispatch();
  const sideMargin = useSelector((state) => state.sideMargin);
  const { margin: space } = sideMargin;

  // For getting screen width and rerenders when screen width is changed //
  function debounce(fn, ms) {
    let timer;

    return (_) => {
      clearTimeout(timer);

      timer = setTimeout((_) => {
        timer = null;

        fn.apply(this, arguments);
      }, ms);
    };
  }

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  // Function Ends

  // Mobile Screen Hambergur menu Button Click
  const showSideBar = () => {
    setClicked(!clicked);
  };
  useEffect(() => {
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");
    header.style.display = "none";
    footer.style.display = "none";
  }, []);

  useEffect(() => {
    if (dimensions.width > 1200) {
      setWindowSize((dimensions.width - 1217) / 2);
    } else if (dimensions.width < 1200 && dimensions.width > 768) {
      setWindowSize((dimensions.width - 768) / 2);
    } else {
      setWindowSize(20);
    }
  }, [dimensions.width]);

  useEffect(() => {
    dispatch(margin(windowSize));
  }, [windowSize, dispatch]);

  // const logoutHandler = () => {
  //   dispatch(userLogout());
  // };

  return (
    <section className='admin_top_bar'>
      <div style={{ margin: `0 ${space}px` }} className='header_wrapper'>
        <div className={clicked ? "opacity" : ""} onClick={showSideBar}></div>
        <nav className='nav'>
          <div className={clicked ? "nav-menu active" : "nav-menu"}>
            <ul className='nav__list'>
              <div className='header_col hambarger_and_logo'>
                <div className='menu-icon' onClick={showSideBar}>
                  <img
                    src='images/bars.svg'
                    alt='Menu bars'
                    className='menu_bars'
                  />
                </div>

                <a href='/'>
                  <img
                    className='navbar-logo'
                    src='/images/logo.svg'
                    alt='logo'
                  />
                </a>
              </div>
              <div className='header_col header_links'>
                <div className='top_bar_icon_container'>
                  <NotificationsNone />
                  <span className='top_icon_badge'>3</span>
                </div>
                <div className='top_bar_icon_container'>
                  <Language />
                </div>
                <div className='top_bar_icon_container'>
                  <Settings />
                </div>
                <img
                  src={avatar}
                  //   src='images/photo-1595502124338-950db27ea1c7.jpg'
                  alt='avatar'
                  className='top_bar_avatar'
                />
                {/* <li className='nav__list-item nav__list-item--services'>
                  <Link to='/service'>Service</Link>
                </li>
                <li className='nav__list-item nav__list-item--about'>
                  <Link to='/about'>About</Link>
                </li>
                <li className='nav__list-item nav__list-item--contact'>
                  <Link to='/contact-us'>Contact</Link>
                </li>
                {/* <div className='header_user_profile_menu'> */}
              </div>
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
      </div>
    </section>
  );
};
export default Topbar;
