import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

const MainSectionTextBox = () => {
  const submitHandler = () => {
    console.log("eh");
  };
  return (
    <>
      <div className='img-shadow'></div>
      <div className='text-box'>
        <h1>World's Biggest Service Providing Platform</h1>
        <p>Any Problem Only One Solution</p>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={5}>
            <Form className='d-flex search'>
              <Form.Control
                // className='mr-sm-2 ml-sm-5'
                type='text'
                placeholder='Search Category....'
              ></Form.Control>
              <Button
                className='p-2 button'
                type='submit'
                variant='success'
                onClick={() => submitHandler()}
              >
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MainSectionTextBox;
