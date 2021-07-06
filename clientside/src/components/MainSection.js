import React from "react";
import { Carousel, Form,Button } from "react-bootstrap";

import MainSectionTextBox from "./MainSectionTextBox";

const MainSection = () => {
  return (
    <div className='main-section'>
      <Carousel fade className='carousels'>
        <Carousel.Item>
          <MainSectionTextBox />
          <img
            src='images/hero-section2.jpg'
            className='d-block w-100 main-img'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 main-img'
            src='images/carousel2.jpg'
            alt='Second slide'
          />
          <MainSectionTextBox />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100 main-img'
            src='images/carousel3.jpg'
            alt='Third slide'
          />
          <MainSectionTextBox />
        </Carousel.Item>
      </Carousel>
      <div className='hero-section-mobile'>
        <div className='hero-section-mobile-box'>
          <h1>WORLD'S BIGGEST SERVICE PROVIDING PLATFORM</h1>
          <Form>
            <Form.Control
              placeholder='Search Category'
              className='mt-4'
            ></Form.Control>
            <Button type='submit' variant='success' className='w-100 mt-2'>
              Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MainSection;

//  <div className='main-section'>
//    <Carousel fade className='carousels'>
//      <Carousel.Item>
//        <MainSectionTextBox />
//        <img
//          src='images/hero-section2.jpg'
//          className='d-block w-100 main-img'
//          alt='First slide'
//        />
//      </Carousel.Item>
//      <Carousel.Item>
//        <img
//          className='d-block w-100 main-img'
//          src='images/carousel2.jpg'
//          alt='Second slide'
//        />
//        <MainSectionTextBox />
//      </Carousel.Item>
//      <Carousel.Item>
//        <img
//          className='d-block w-100 main-img'
//          src='images/carousel3.jpg'
//          alt='Third slide'
//        />
//        <MainSectionTextBox />
//      </Carousel.Item>
//    </Carousel>
//  </div>;
