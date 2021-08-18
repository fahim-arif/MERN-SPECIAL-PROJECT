import React from "react";
import { Link } from "react-router-dom";
import "../../css/TuitionScreenTutorList.css";
const TuitionScreenTutorList = ({ tutor }) => {
  return (
    <div className='individual_tutor'>
      <Link to={`/tuition/tutor/${tutor._id}`}>
        <div className='individual_tutor_image'>
          <img src={tutor.image} alt={tutor.name} />
        </div>
      </Link>
      <hr />
      <Link to={`/tuition/tutor/${tutor._id}`}>
        <div className='individual_tutor_title'>{tutor.name}</div>
      </Link>
      <div className='individual_tutor_city'>
        ({tutor.tution_info.preffered_area.distict})
      </div>
      <div className='individual_tutor_prefer_medium'>
        {tutor.tution_info.preffered_medium} medium
      </div>
      <div className='individual_tutor_ratings'>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star'></i>
        <i className='fas fa-star-half-alt'></i>
        4.8 (10)
      </div>
      <hr />
      <Link to={`/tuition/tutor/${tutor._id}`}>
        <div className='individual_tutor_salary'>
          {tutor.tution_info.expected_min_salary} Taka/Month
        </div>
      </Link>
    </div>
  );
};

export default TuitionScreenTutorList;
