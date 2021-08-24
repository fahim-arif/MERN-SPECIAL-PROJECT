import React from "react";
import { Link } from "react-router-dom";
import "../css/UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row row-cols-md-2 row-cols-1'>
          <div className='col-md-3 col-12 mx-md-0 mx-auto'>
            <button className='user-icon'>
              <i class=' fas fa-user-circle '></i>
            </button>
            <div className='user-info d-flex flex-column  '>
              <Link to=''>Change Password</Link>
              <Link to=''>Personal Information</Link>
              <Link to=''>Academic Information </Link>
            </div>
            <div className='members-plan mt-5'>
              <h1 className='fs-5 fw-bolder text-center'>Membership Plans</h1>
              <div
                id='carouselExampleIndicators'
                class='carousel slide'
                data-bs-ride='carousel'
              >
                <div className='carousel-indicators'>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='0'
                    class='active'
                    aria-current='true'
                    aria-label='Slide 1'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='1'
                    aria-label='Slide 2'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselExampleIndicators'
                    data-bs-slide-to='2'
                    aria-label='Slide 3'
                  ></button>
                </div>
                <div className='carousel-inner'>
                  <div className='carousel-item active  '>
                    <div className=' bg-success py-5 text-center'>
                      <h1 className='fs-6 fw-bold text-white'>
                        Premium Tutor 1 month
                      </h1>
                      <h2 className='fs-5 fw-bold text-white'>
                        Tk 200/30 days
                      </h2>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button className=' btn-danger mt-0 fw-bold px-4 py-2 border-0 '>
                        pay now
                      </button>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className=' bg-danger py-5 text-center'>
                      <h1 className='fs-6 fw-bold text-white '>
                        Featured Tutor
                      </h1>
                      <h2 className='fs-5 fw-bold text-white '>
                        Tk 500/365 days
                      </h2>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button className=' btn-primary mt-0 fw-bold px-4 py-2 border-0 '>
                        pay now
                      </button>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className=' bg-primary py-5 text-center'>
                      <h1 className='fs-6 fw-bold text-white'>premium Tutor</h1>
                      <h2 className='fs-5 fw-bold text-white'>
                        Tk 300/180 days
                      </h2>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button className=' btn-success mt-0 fw-bold px-4 py-2 border-0 '>
                        pay now
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className='carousel-control-prev'
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Previous</span>
                </button>
                <button
                  className='carousel-control-next'
                  type='button'
                  data-bs-target='#carouselExampleIndicators'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-9 col-12 '>
            <div className='row user-navbar'>
              <div className='col user-nav'>
                <Link to=''>
                  <i className='fas fa-user'></i> My Profile
                </Link>
                <Link to=''>
                  <i className='fas fa-user-edit'></i> Upgrade Tutor Membership
                </Link>
                <Link to=''>
                  <i className='fas fa-bell'></i> My Notification
                </Link>
                <Link to=''>
                  <i className='fas fa-info-circle'></i> Tuition Related
                  Information
                </Link>
              </div>
            </div>
            <div className='row user-info-box'>
              <div className='col-12 ps-5'>
                <hr />
                <h3 className='fw-bolder fs-5 d-flex align-items-center justify-content-between '>
                  Tutor info:{" "}
                  <Link to=''>
                    <i class='fas fa-edit fs-6 text-black '>Edit info</i>
                  </Link>
                </h3>
              </div>
              <div className='col-12 ps-5'>
                <h3 className='fw-bolder fs-5 d-flex align-items-center justify-content-between '>
                  Tution info:{" "}
                  <Link to=''>
                    <i class='fas fa-edit fs-6 text-black '>Edit info</i>
                  </Link>
                </h3>
                <hr />
                <div className='mt-5 px-5 '>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Expected Minimum Salary: <span>0 tk/month :</span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Current Status for Tuition: <span>Available</span>{" "}
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Days per week: <span></span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Preffered Tutoring Style: <span></span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Place of Learning: <span></span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Extra Facilities: <span></span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Preferred Medium Of Education: <span></span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Preferred Classes: <span></span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Preferred Subjects: <span></span>
                  </p>
                  <p className='fs-6 fw-bold d-flex justify-content-between'>
                    Preferred Areas to Teach: <span>DHAKA</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
