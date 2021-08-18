import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TuitionScreenTutorList from "../components/TuitionScreenPage/TuitionScreenTutorList";
// import TutorSelector from "../components/TuitionPage/TutorSelector";
import "../css/TuitionScreen.css";
import AllTutorInformation from "../AllTutorInformation";
const HomeScreen = ({ match }) => {
  const sideMargin = useSelector((state) => state.sideMargin);
  const { margin: space } = sideMargin;
  // const pageNumber = match.params.pageNumber || 1;
  // const tutorType = match.params.tutorType || "Platinum";

  return (
    <>
      <div
        className='tuition_hero_section'
        style={{ margin: `16px ${space}px 0 ${space}px` }}
      >
        <Link to='/tuition'>ShobCity &gt; Tuition</Link>
        <div className='tuition_hero_section_wrapper'>
          <div className='tuition_hero_section_post_tuition'>
            <div className='post_tuiton_title'>Hi, Fahim Arif</div>
            <div className='post_tuiton_content'>
              You can also post a tuition request
            </div>
            <div className='btn post_tuiton_button'>
              <Link to='/tuition/post-tuition'>Post a Tuition</Link>
            </div>
          </div>
          <div className='tuition_hero_section_available_tuition'>
            <div className='tuition_hero_available_tuition_background'></div>
            <div className='btn view_all_tuition_button'>
              <Link to='/tuition/available-tuition'>View all tuition</Link>
            </div>
            <div className='available_tuition__title'>Available Tuitions</div>
            <div className='available_tuition_carousel'>
              <p>Location : Mirpur 10, Dhaka</p>
              <p>Subject & Class : Physics, Inter 2nd Year</p>
              <p>Days : 3 Days</p>
              <p>Salary : 5000</p>
            </div>
            <div className='btn available_tuition__details_button  '>
              <Link to='/tuition/available-tuition/1'>View Details</Link>
            </div>
            <button className='btn circle-button left__button'>{"<"}</button>
            <button className='btn circle-button right__button'>{">"}</button>
          </div>
        </div>
      </div>
      {/* New section start */}
      <div
        className='search_for_tutors_title'
        style={{ margin: `0 ${space}px` }}
      >
        Search For Tutors
      </div>
      <div
        className='search_for_tutors_section'
        style={{ margin: `0 ${space}px` }}
      >
        <div className='search_for_tutors_search_box'>
          <form className='filter_tutor_form'>
            <select className='form-select form-select-lg tutors_search__box'>
              <option selected>Any City</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <select className='form-select form-select-lg tutors_search__box'>
              <option selected>Any University</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <select className='form-select form-select-lg tutors_search__box'>
              <option selected>Any Class</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <select className='form-select form-select-lg tutors_search__box'>
              <option selected>Any Subject</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <select className='form-select form-select-lg tutors_search__box'>
              <option selected>Any Medium</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <button
              type='submit'
              className='btn btn-purple button-primary tutors_filter_search_button px-4'
            >
              Search
            </button>
          </form>
          <button className='btn button-purple-transparent more_filter_button'>
            More Filter Options
          </button>
        </div>
      </div>
      {/* New section start */}
      <div
        className='our_tutor_list_section'
        style={{ margin: `0 ${space}px` }}
      >
        <div className='our_tutor_list_title'>Our Tutors List</div>
        <div className='our_tutor_list_wrapper'>
          {AllTutorInformation.map((tutor) => (
            <div className='our_tutor_list_col'>
              <TuitionScreenTutorList
                id={tutor._id}
                tutor={tutor}
              ></TuitionScreenTutorList>
            </div>
          ))}
        </div>
      </div>

      {/* <h3 className='latest__tutor__heading'>Latest Tutors</h3>
      <TutorSelector pageNumber={pageNumber} tutorType={tutorType} /> */}
    </>
  );
};

export default HomeScreen;
