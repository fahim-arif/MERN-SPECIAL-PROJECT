import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/HomePageScreen.css";

const HomePageScreen = () => {
  const [windowSize, setWindowSize] = useState(0);
  const [mobileSpace, setMobileSpace] = useState(0);
  const sideMargin = useSelector((state) => state.sideMargin);
  const { margin: space } = sideMargin;

  console.log(space)
  useEffect(() => {
    console.log('effect')
    if (space > 20) {
      setMobileSpace(space);
    } else {
      setMobileSpace(0)
    }
  }, [space]);

  let settings = {
    dots: true, 
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    speed:500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 822,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 584,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // let windowSize = 0;

  // if (windowSize > 1200) {
  //   windowSize = (window.innerWidth - 1217) / 2;
  // }
  console.log(mobileSpace);
  return (
    <>
      <div className='hero-section'>
        <div
          className='hero-section__content'
          style={{ margin: `0 ${space}px` }}
        >
          <h1 className='hero-section--heading'>
            Join The World's <br></br> Work Marketplace
          </h1>
          <h4 className='hero-section--sub_heading'>
            Find great talent. Build your business. <br></br> Take your career
            to the next level.
          </h4>
          <button
            type='button'
            className='btn button-primary hero-section--btn btn-purple'
          >
            Find Talent
          </button>
          <button
            type='button'
            className='btn button-secondary hero-section--btn'
          >
            Find Work
          </button>
        </div>
      </div>
      {/* New Section  */}
      <h2 className='text-center section_gap hero_section_titles'>
        Hire a pro for any skill
      </h2>
      <div className='hire_pro_section'>
        <Slider style={{ margin: `0 ${space}px` }} {...settings}>
          <div className='pro_section_card-wrapper'>
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
          <div className='pro_section_card-wrapper'>
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
        </Slider>
      </div>
      {/* New Section */}
      <h2 className='text-center section_gap hero_section_titles'>
        How we Work
      </h2>
      <div className='how_we_work_section' style={{ padding: `0 ${space}px` }}>
        <div className='work_section_title_table'>
          This is a market place for all service provider in Bangladesh
        </div>
        <div className='how_we_work_row'>
          <div className='work_section_col'>
            <div className='work_section_title'>
              This is a market place for all service provider in Bangladesh
            </div>
            <div className='work_section_helper'>
              <i className='far fa-check-circle'></i>
              <div className='work_section_content'>
                Connect to freelancers with proven business experience
              </div>
            </div>
            <div className='work_section_helper'>
              <i className='far fa-check-circle'></i>
              <div className='work_section_content'>
                Get matched with the perfect talent by a customer success
                manager
              </div>
            </div>
            <div className='work_section_helper'>
              <i className='far fa-check-circle'></i>
              <div className='work_section_content'>
                Manage teamwork and boost productivity with one powerful
                workspace
              </div>
            </div>
          </div>
          <div className='work_section_col'>
            <div className='work_section_video_wrapper'>
              <img
                className='work_section_video'
                src='images/photo-1521791136064-7986c2920216.jpg'
                alt='hand shake image'
              />
            </div>
          </div>
        </div>
      </div>
      {/* New Section */}
      <h2 className='text-center section_gap hero_section_titles'>
        HOW to Get a Job/Service
      </h2>
      <div className='how_to_get_job_section'>
        <div
          className='how_to_get_job_col'
          style={{ marginLeft: ` ${space}px` }}
        >
          <div className='how_to_get_job_img'></div>
        </div>
        <div
          className='how_to_get_job_col get_job--col2'
          // style={{ marginRight: ` ${space}px` }}
        >
          <div className='text-center pt-4 mb-4 how_to_get_job_title'>
            Find great work
          </div>
          <div className='text-center mb-4 pl-4 pr-4 how_to_get_job_subtitle'>
            Meet clients you’re excited to work with and take your career or
            business to new heights.
          </div>
          <div className='find_work_section_content_wrapper'>
            <div className='find-work-content'>
              <i className='far fa-check-circle'></i>
              <div className='find_work_section_content find-work-content'>
                Find opportunities for every stage of your freelance career
              </div>
            </div>
            <div className='find-work-content'>
              <i className='far fa-check-circle'></i>
              <div className='find_work_section_content find-work-content'>
                Control when, where, and how you work
              </div>
            </div>
            <div className='find-work-content'>
              <i className='far fa-check-circle'></i>
              <div className='find_work_section_content find-work-content'>
                Explore different ways to earn
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='btn button-secondary find_opportunity_btn'
          >
            Find Opportunity
          </button>
        </div>
      </div>

      {/* <-----------New Section Start---------> */}

      <h2 className='text-center section_gap hero_section_titles'>
        FIND Suitable service provider for you
      </h2>
      <div
        className='suitable_service_section'
        style={{ margin: `0 ${mobileSpace}px` }}
      >
        {/* <div className='suitable_service_section_wrapper' style={{}}> */}
        <div className='suitable_service_wrapper'>
          .suitable_service_content_wrapper
          <div className='suitable_service_title'>
            Find the talent needed to get{" "}
            <span className='suitable_service_title_break'>
              your business growing.
            </span>
          </div>
          <button className='btn button-secondary suitable_service--btn'>
            Get Started
          </button>
        </div>
        <img
          src='images/home1.jpg'
          className='suitable_service_img'
          alt='suitable service setion image'
        />
      </div>
      {/* New section start */}
      <h2 className='text-center section_gap hero_section_titles'>
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
            <div className='client_saying_card_content_wrapper'>
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
                "When you want to create a business bigger than yourself, you
                need a lot of help. That's what ShobCity does."
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default HomePageScreen;
