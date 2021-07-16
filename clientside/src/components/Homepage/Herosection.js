import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Form, FormControl } from "react-bootstrap";
import Reviews from "../Reviews";
const HeroSection = () => {
  const onPreviousButton = () => {
    if (count === 0) setCount(Reviews.length - 1);
    else setCount(count - 1);
  };
  const onForwardButton = () => {
    if (count === Reviews.length - 1) setCount(0);
    else setCount(count + 1);
  };

  const [count, setCount] = useState(0);
  const [classChange, setClassChange] = useState(true);
  useEffect(() => {
    const clearId = setTimeout(() => {
      setClassChange();
      if (count < 2) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 2000);
    console.log(clearId);
    return () => {
      clearTimeout(clearId);
    };
  }, [count]);
  return (
    <>
      <div className='hero-section'>
        <h1 className='hero-section-heading my-4'>
          Find Your Suitable Teacher
        </h1>
        <div className='search-box'>
          {/* <InputGroup>
          <FormControl></FormControl>
        </InputGroup>
        <input type="text" /> */}
          <div>
            <Form inline style={{ background: "#2F88BD" }}>
              <Form.Control
                className='m-2 p-2 my-3 mx-3'
                as='select'
                defaultValue='All District'
                onChange={() => console.log("changed")}
              >
                <option>All District...</option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Bogura</option>
              </Form.Control>
              <Form.Control
                className='m-2 p-2'
                as='select'
                defaultValue='All Location'
                onChange={() => console.log("changed")}
              >
                <option>All Location...</option>
                <option>...</option>
              </Form.Control>
              <Form.Control
                className='m-2 p-2'
                as='select'
                defaultValue='All Classes'
                onChange={() => console.log("changed")}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Form.Control>
              <Form.Control
                className='m-2 p-2'
                as='select'
                defaultValue='All Subject'
                onChange={() => console.log("changed")}
              >
                <option>All Subject...</option>
                <option>Bangla</option>
                <option>English</option>
                <option>Physics</option>
                <option>Math</option>
              </Form.Control>
              <Button className='mx-3' variant='success'>
                Search
              </Button>
            </Form>
          </div>
        </div>
        <Image
          className='hero-img'
          src='images/hero-section2.jpg'
          fluid
        ></Image>
      </div>
      <Row>
        <Col>
          <h1>See Some Review About Our tutor</h1>
        </Col>
      </Row>

      <Row className={`review-section-row-2`}>
        <Col lg={8} className='text-justify review-section-picture-column-1'>
          {Reviews[count].content}
        </Col>
        <Col lg={4} className='review-section-picture-column-2'>
          <Image
            className='review-section-picture'
            src={Reviews[count].image}
            rounded
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button onClick={onPreviousButton} variant='danger'>
            <i className='fas fa-chevron-left'></i>
          </Button>
          <Button onClick={onForwardButton} variant='danger'>
            <i className='fas fa-chevron-right'></i>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;
