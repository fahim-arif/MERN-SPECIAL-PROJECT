import React from "react";
import HeroSection from "../components/TuitionPage/Herosection";
import TutorSelector from "../components/TuitionPage/TutorSelector";

const HomeScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const tutorType = match.params.tutorType || "Platinum";

  return (
    <>
      <HeroSection />
      <h3 className='latest__tutor__heading'>Latest Tutors</h3>
      <TutorSelector pageNumber={pageNumber} tutorType={tutorType} />
    </>
  );
};

export default HomeScreen;
