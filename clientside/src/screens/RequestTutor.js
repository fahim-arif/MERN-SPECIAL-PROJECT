import React from "react";
import "../css/RequestTutor.css";
import { Form, Container, Row, Col } from "react-bootstrap";

const RequestTutor = () => {
  return (
    <Container className="RequestTutor-container">
      <Row>
        <Col lg={8} md={12}>
          <Form>
            <Container>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Title*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Example: Need a tutior in Dhaka"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Type your Name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Select Student Gender</Form.Label>

                    <Form.Control as="select" placeholder="Select Gender">
                      <option>Select Option</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Institute</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type your Institute name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Selrct Medium</Form.Label>
                    <Form.Control as="select">
                      <option>Select Medium</option>
                      <option>Bangla Medium</option>
                      <option>English Medium</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Select Class</Form.Label>
                    <Form.Control as="select">
                      <option>Class one</option>
                      <option>Class two</option>
                      <option>Class three</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Phone Number*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type your phone number"
                    />
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>E-Mail</Form.Label>
                    <Form.Control type="text" placeholder="Type your E-Mail" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Select City Name*</Form.Label>
                    <Form.Control as="select">
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Khulna</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Select Area Name*</Form.Label>
                    <Form.Control as="select">
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Khulna</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Location Details*</Form.Label>
                    <Form.Control as="textarea" row={3} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Select Teacher Gender</Form.Label>
                    <Form.Control as="select">
                      <option>Select Option</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col lg={6} md={12}>
                  <Form.Group>
                    <Form.Label>Days Per Week</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Select Subject</Form.Label>
                    <Form.Control as="textarea" row={2} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Salary range</Form.Label>
                    <Form.Control as="select">
                      <option>Please Select Salary Range</option>
                      <option>1000-2000</option>
                      <option>2500-3500</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Extra Information</Form.Label>
                    <Form.Control as="textarea" row={3} />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
        <Col lg={4} md={12}>
          <div className="RequestTutor-FAQ">
            <u>
              <b> Help & Info: </b>
            </u>
            <br />
            <b> Q. If i cant get the desired tutor ?</b>
            <br />
            Just fill up the request tutor form and send us. We will try to find
            your desired tutor.
            <br />
            <b> Q. what will happen after fill the forms?</b>
            <br />
            After fill up the form the information will be sent to
            bdtutorsfinalnew support team. They will review/ verify the info and
            will publish on the available tuitions section.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RequestTutor;
