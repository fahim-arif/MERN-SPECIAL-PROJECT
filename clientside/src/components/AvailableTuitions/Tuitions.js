import React from "react";

import { TuitionList } from "./TuitionList";
import "../../css/Tuitions.css";

function Tuitions() {
  const tuitions = TuitionList.map((tuition) => {
    return (
      <div className='Tutions-body'>
        <div className='Tutions-heading'>{tuition.district}</div>
        <div className='Tutions-row'>
          <div className='Tutions-col'>Tution ID</div>
          <div className='Tutions-col'>: {tuition.tutionID}</div>
        </div>
        <div className='Tutions-row'>
          <div className='Tutions-col'>Class</div>
          <div className='Tutions-col'>: {tuition.class}</div>
        </div>
        <div className='Tutions-row'>
          <div className='Tutions-col'>Subject</div>
          <div className='Tutions-col'>: {tuition.subject}</div>
        </div>
        <div className='Tutions-row'>
          <div className='Tutions-col'>Location</div>
          <div className='Tutions-col'>: {tuition.location}</div>
        </div>
        <div className='Tutions-row'>
          <div className='Tutions-col'>Days</div>
          <div className='Tutions-col'>: {tuition.days}</div>
        </div>
        <div className='Tutions-row'>
          <div className='Tutions-col'>Salary</div>
          <div className='Tutions-col'>: {tuition.salayRange}</div>
        </div>
      </div>
    );
  });
  return <div>{tuitions}</div>;
}

export default Tuitions;
