import React, { useState } from "react";
import TutorLister from "./TutorLister";
import "../../css/TutorSelector.css";
import { Button, ButtonGroup } from "react-bootstrap";

function TutorSelector({ pageNumber }) {
  const [tutorType, setTutorType] = useState("Platinum");

  return (
    <div className='tutorSelector'>
      <ButtonGroup size='lg' className='mb-2 tutor__selector__button'>
        <Button
          variant='warning'
          className='m-2'
          onClick={() => setTutorType("Platinum")}
        >
          Platinum Tutors
        </Button>

        <Button className='m-2' onClick={() => setTutorType("Gold")}>
          Gold Tutors
        </Button>

        <Button
          variant='warning'
          className='m-2'
          onClick={() => setTutorType("Silver")}
        >
          Silver Tutors
        </Button>
      </ButtonGroup>

      <TutorLister pageNumber={pageNumber} tutorType={tutorType} />
    </div>
  );
}

export default TutorSelector;
