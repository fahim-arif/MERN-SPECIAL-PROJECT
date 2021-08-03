import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/HomePageScreen.css";
const HomePageScreen = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setWindowSize((window.innerWidth - 1217) / 2);
    } else {
      setWindowSize(10);
    }
  }, []);
  let settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  // let windowSize = 0;

  // if (windowSize > 1200) {
  //   windowSize = (window.innerWidth - 1217) / 2;
  // }

  console.log(window.innerWidth);
  console.log(windowSize);
  return (
    <>
      <div className='hero-section' style={{ margin: `0 ${windowSize}px` }}>
        <div className='hero-section__content'>
          <h1 className='hero-section--heading'>
            Join The World's <br></br> Work Marketplace
          </h1>
          <h4 className='hero-section--sub_heading'>
            Find great talent. Build your business. <br></br> Take your career
            to the next level.
          </h4>
          <div className='btn button-primary hero-section--btn btn-purple'>
            Find Talent
          </div>
          <div className='btn button-transparent hero-section--btn'>
            Find Work
          </div>
        </div>
      </div>
      <h2 className='text-center mt-5 mb-5 hero--titles'>
        Hire a pro for any skill
      </h2>
      <div
        className='hire_pro_section'
        style={{ padding: `0 ${windowSize}px` }}
      >
        <Slider {...settings}>
          <div className='pro_section_card-wrapper' style={{ width: 306 }}>
            <Link to='#'>
              <div className='card'>
                <div className='pro_section_card_image'>
                  <img src='images/tutor.jpg' alt='tutor' />
                </div>
                <div className='hire_pro_title'>
                  <h2>Tutor</h2>
                </div>
              </div>
            </Link>
          </div>
          <div className='pro_section_card-wrapper'>
            <Link to='#'>
              <div className='card'>
                <div className='pro_section_card_image'>
                  <img
                    src='images/photo-1508674861872-a51e06c50c9b.jpg'
                    alt='tutor'
                  />
                </div>
                <div className='hire_pro_title'>
                  <h2>Web Development</h2>
                </div>
              </div>
            </Link>
          </div>
          <div className='pro_section_card-wrapper'>
            <Link to='#'>
              <div className='card'>
                <div className='pro_section_card_image'>
                  <img src='images/doctor.jpg' alt='tutor' />
                </div>
                <div className='hire_pro_title'>
                  <h2>Doctor</h2>
                </div>
              </div>
            </Link>
          </div>
          <div className='pro_section_card-wrapper'>
            <Link to='#'>
              <div className='card'>
                <div className='pro_section_card_image'>
                  <img src='images/designer.jpg' alt='tutor' />
                </div>
                <div className='hire_pro_title'>
                  <h2>Design</h2>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
        {/* <div className='pro_section_rows'>
          <div className='pro_section_columns'>
            <img src='images/tutor.jpg' alt='' />
          </div>
          <div className='pro_section_columns'>
            <img src='images/photo-1508674861872-a51e06c50c9b.jpg' alt='' />
          </div>
          <div className='pro_section_columns'>
            <img src='images/doctor.jpg' alt='' />
          </div>
          <div className='pro_section_columns'>
            <img src='images/designer.jpg' alt='' />
          </div>
        </div> */}
      </div>
      <h2 className='text-center mt-5 mb-5 hero--titles'>How we Work</h2>
      <div className='how_we_work_section'>
        <div className='work_section_title'>
          This is a market place for all service provider in Bangladesh
        </div>
        <div className='work_section_helper'>
          <svg
            className='tick_mark_svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
            <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
          </svg>
          <div className='work_section_content'>
            Connect to freelancers with proven business experience
          </div>
        </div>
        <div className='work_section_helper'>
          <svg
            className='tick_mark_svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
            <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
          </svg>
          <div className='work_section_content'>
            Get matched with the perfect talent by a customer success manager
          </div>
        </div>
        <div className='work_section_helper'>
          <svg
            className='tick_mark_svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
            <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
          </svg>
          <div className='work_section_content'>
            Manage teamwork and boost productivity with one powerful workspace
          </div>
        </div>
        <div
          className='work_section_video_wrapper'
          style={{
            background: " url(http://localhost:3000/images/play_button.png)",
          }}
        >
          <img
            className='work_section_video'
            src='images/photo-1521791136064-7986c2920216.jpg'
            alt='hand shake image'
          />
        </div>
      </div>
      <h2 className='text-center mt-5 mb-5 hero--titles'>
        HOW to Get a Job/Service
      </h2>
      <div className='how_to_get_job_section'>
        <h3
          className='text-center pt-4 mb-4 '
          style={{ color: "#FFF", fontSize: "1.375rem" }}
        >
          Find great work
        </h3>
        <div
          className='text-center mb-4 pl-4 pr-4'
          style={{ color: "#FFF", fontSize: "1.125rem", fontWeight: "600" }}
        >
          Meet clients you’re excited to work with and take your career or
          business to new heights.
        </div>
        <div className='work_section_helper find-work-content'>
          <svg
            className='tick_mark_svg '
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
            <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
          </svg>
          <div className='work_section_content find-work-content'>
            Find opportunities for every stage of your freelance career
          </div>
        </div>
        <div className='work_section_helper'>
          <svg
            className='tick_mark_svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
            <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
          </svg>
          <div className='work_section_content find-work-content'>
            Control when, where, and how you work
          </div>
        </div>
        <div className='work_section_helper'>
          <svg
            className='tick_mark_svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z'></path>
            <path d='M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z'></path>
          </svg>
          <div className='work_section_content find-work-content'>
            Explore different ways to earn
          </div>
        </div>
        <div className='btn button-secondary find_opportunity_btn'>
          Find Opportunity
        </div>
      </div>
      <h2 className='text-center mb-5 mt-5 hero--titles'>
        FIND Suitable service provider for you
      </h2>
      <div className='suitable_service_section'>
        <div className='suitable_service_title'>
          Find the talent needed to get your business growing.
        </div>
        <div className='btn button-secondary find_opportunity_btn'>
          Get Started
        </div>
        <img
          src='images/home1.jpg'
          className='suitable_service_img'
          alt='suitable service setion image'
        />
      </div>
      <h2 className='text-center mb-5 mt-5 hero--titles'>
        what our client saying
      </h2>
      <div className='our_client_saying_section'>
        <div className='client_saying_background'></div>
        <div className='client_saying_card_wrapper'>
          <div className='client_saying_card'>
            <img
              className='client_saying_img'
              src='images/photo-1595502124338-950db27ea1c7.jpg'
              alt='what our client saying image'
            />
            <div className='client_saying_card__title'>
              Fahim Arif, Co-Founder of Shobcity
            </div>
            <div className='client_saying_card__rating'>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
            </div>
            <div className='client_saying_card_content'>
              "When you want to create a business bigger than yourself, you need
              a lot of help. That's what ShobCity does."
            </div>
          </div>
        </div>
      </div>
      <div className='footer site_footer'>
        <div className='footer-wrapper'>
          <div className='footer__row'>
            <div className='footer__col'>
              <h5>For client</h5>
            </div>
            <div className='footer__col'>
              <h5>For Service Provicer</h5>
            </div>
            <div className='footer__col'>
              <h5>Company</h5>
            </div>
            <div className='footer__col col-exp'>
              <h5>Useful Links</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageScreen;
