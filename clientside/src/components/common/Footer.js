import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../css/Footer.css";
const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col md={6} lg={3} className='footer-col'>
            <h4>company</h4>
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
                <Link to='#'>Affiliate Program</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className='footer-col'>
            <h4>get help</h4>
            <ul>
              <li>
                <Link to='#'>FAQ</Link>
              </li>

              <li>
                {" "}
                <Link to='#'>Your Order</Link>
              </li>
              <li>
                <Link to='#'>Returns</Link>
              </li>
              <li>
                <Link to='#'>Order status</Link>
              </li>
              <li>
                <Link to='#'>Payment Option</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className='footer-col'>
            <h4>online services</h4>
            <ul>
              <li>
                <Link to='/tuition'>Tuition</Link>
              </li>
              <li>
                <Link to='#'>Medical</Link>
              </li>
              <li>
                <Link to='#'>Web development</Link>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3} className='footer-col'>
            <h4>follow us</h4>
            <div className='social-links'>
              <Link to='#'>
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-twitter'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-instagram'></i>
              </Link>
              <Link to='#'>
                <i className='fab fa-linkedin-in'></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
