import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

function TutorBox({ tutor }) {
  return (
    <Card className='my-3   rounded'>
      <Link
        className='cardbox__linker'
        style={{ textDecoration: "none", color: "#2b2b28" }}
        to={`/tutor/${tutor._id}`}
      >
        <Row className='tutorBox__row'>
          <Col md={5}>
            <img
              className='card-img'
              src={tutor.image}
              alt={tutor.name}
              style={{ maxHeight: "100px" }}
            />

            <h6
              className=' text-center'
              style={{ color: "#900303", fontWeight: 600 }}
            >
              {" "}
              {tutor.tution_info.preffered_area.distict}{" "}
            </h6>
          </Col>

          <Col className='my-2' md={7} style={{ paddingLeft: "0px" }}>
            <strong>{tutor.name} </strong>
            {tutor.type === "Platinum" && (
              <StarIcon style={{ fill: "#ff9800", fontSize: "20px" }} />
            )}
            {tutor.type === "Gold" && (
              <StarHalfIcon style={{ fill: "#ff9800", fontSize: "20px" }} />
            )}
            {tutor.type === "Silver" && (
              <StarOutlineIcon style={{ fill: "#ff9800", fontSize: "20px" }} />
            )}
            <br />
            <span className='text-secondary'>
              {" "}
              {tutor.educational_info.honors[1]}{" "}
            </span>
            <h6 className='text-success'>
              {" "}
              {tutor.tution_info.expected_min_salary}/month
            </h6>
            <h6 className='text-danger'> {tutor.basic_info.phone}</h6>
          </Col>
        </Row>
      </Link>
    </Card>
  );
}

export default TutorBox;
