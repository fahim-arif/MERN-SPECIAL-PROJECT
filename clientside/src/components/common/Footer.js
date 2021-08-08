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
              <div className='footer__col'>
                <div className='footer_title footer_title--row_one'>
                  For Service Provicer
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
              <img src="images/logo.svg" alt="" />
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
