import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../css/Footer.css";
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer-wrapper'>
          <div className='site_footer'>
            <div className='footer__row'>
              <div className='footer__col'>
                <div className='footer_title footer_title--row_one'>
                  For client
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='/tuition'>Tuition</Link>
                    </li>
                    <li>
                      <Link to='#'>Your Order</Link>
                    </li>
                    <li>
                      <Link to='#'>Payment Option</Link>
                    </li>
                    <li>
                      <Link to='#'>FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer__col'>
                <div className='footer_title footer_title--row_one'>
                  For Service Provicer
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='/tuition'>Tuition</Link>
                    </li>
                    <li>
                      <Link to='#'>Web Development</Link>
                    </li>
                    <li>
                      <Link to='#'>Medical</Link>
                    </li>
                    <li>
                      <Link to='#'>Designing</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer__col'>
                <div className='footer_title footer_title--row_one'>
                  Company
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='#'>About Us</Link>
                    </li>
                    <li>
                      <Link to='#'>Our Services</Link>
                    </li>
                    <li>
                      <Link to='#'>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to='#'>About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footer__col col-exp'>
                <div className='footer_title footer_title--row_one'>
                  Useful Links
                </div>
                <div className='footer_links'>
                  <ul>
                    <li>
                      <Link to='/user-profile'>My Profile</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact Us</Link>
                    </li>
                    <li>
                      <Link to='/register'>Register</Link>
                    </li>
                    <li>
                      <Link to='/login'>Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='footer_second_row'>
            <div className='footer_second_col'>
              <div className='footer_title footer_title--row_two'>
                Follow us
              </div>
              <Link to='#'>
                <i className='fab fa-facebook'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-twitter'></i>
              </Link>
            </div>
            <div className='footer_second_col'>
              <div className='footer_title footer_title--row_two'>
                Mobile App
              </div>
              <Link to='#'>
                <i className='fab fa-apple'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-android'></i>
              </Link>
            </div>
          </div>
          <hr />
          <div className='footer_bottom'>
            <div className='footer_site_logo'>
              <img src='images/logo.svg' alt='' />
            </div>
            <Link to='#'>Terms of Service</Link>
            <Link to='#'>Privacy Policy</Link>
            <Link to='#'>Accessibility</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
