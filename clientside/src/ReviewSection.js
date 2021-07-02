import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import Image from "react-bootstrap/Image";
import Reviews from "./Reviews";
import "../index.css";

const ReviewSection = () => {
  const [count, setCount] = useState(0);
  const [classChange, setClassChange] = useState(true);

  const myClassName = classChange
    ? "animate__animated animate__fadeInRight"
    : "";
  console.log(classChange);

  const onPreviousButton = () => {
    if (count === 0) setCount(Reviews.length - 1);
    else setCount(count - 1);
  };
  const onForwardButton = () => {
    if (count === Reviews.length - 1) setCount(0);
    else setCount(count + 1);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      onForwardButton();
      setClassChange(true);
    }, 2000);

    return () => {
      clearTimeout(timerId);
      setClassChange(false);
    };
  }, [count]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>See Some Review About Our tutor</h1>
          </Col>
        </Row>
        <Row className={`review-section-row-2 ${myClassName}`}>
          <Col lg={8} className='text-justify review-section-picture-column-1'>
            {Reviews[count].comment}
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
      </Container>
    </div>
  );
};

export default ReviewSection;
