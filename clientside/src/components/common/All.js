import React from "react";
import { Carousel, Form, Button, Row, Col, Container } from "react-bootstrap";
import Service from "./Service";
import services from "../../static-data/Services";
import "../../css/service-category-main.css";

import MainSectionTextBox from "./MainSectionTextBox";

const MainSection = () => {
  return (
    <>
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
      <div className='service-category-main'>
        <Container>
          <h1>Professional services</h1>
          <Row>
            {services.map((service) => (
              <Col key={service.name} xl={3} lg={4} md={6} sm={12}>
                <Service service={service} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className='become_a_service_man'>
        <Container>
          <h2>Join as a Service Man</h2>
          <Row>
            <Col xs={12} sm={6} lg={3}>
              <Link to='#'>
                <div className='dev'>
                  <div className='join_service_img'>
                    <Card.Img fluid src='/images/dev.PNG'></Card.Img>
                  </div>
                </div>
                <h5>
                  Become <br /> Web Developer
                </h5>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <Link to='#'>
                <div className='dev'>
                  <div className='join_service_img'>
                    <Card.Img
                      fluid
                      src='/images/doctor-character-background_1270-84.jpg'
                    ></Card.Img>
                  </div>
                </div>
                <h5>
                  Become <br /> Doctor
                </h5>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <Link to='#'>
                <div className='dev'>
                  <div className='join_service_img'>
                    <Card.Img
                      fluid
                      src='/images/file-teaching-skills-1605625101.jpg'
                    ></Card.Img>
                  </div>
                </div>
                <h5>
                  Become
                  <br /> Teacher
                </h5>
              </Link>
            </Col>
            <Col xs={12} sm={6} lg={3}>
              <Link to='#'>
                <div className='dev'>
                  <div className='join_service_img'>
                    <Card.Img
                      fluid
                      src='/images/graphic-designer-at-work-color-samples-picture-id655926676-800x358.jpg'
                    ></Card.Img>
                  </div>
                </div>
                <h5>
                  Become <br />
                  Web Designer
                </h5>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainSection;
