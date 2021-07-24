import React from "react";
import { Row, Col, Image, Button, Form, FormControl } from "react-bootstrap";
import SearchBox from "./SearchBox";
const HeroSection = () => {
  return (
    <>
      <div className='hero-section'>
        <h1 className='hero-section-heading'>Find Your Suitable Teacher</h1>
        <div className='search-box'>
          <SearchBox />
        </div>
        <Image
          className='hero-img'
          src='images/hero-section2.jpg'
          fluid
        ></Image>
      </div>
    </>
  );
};

export default HeroSection;
