import React from "react";
import ServiceRegProcess from "../components/Register & Login/ServiceRegProcess";

// import ProgressBar from "./ProgressBar";
import "../css/BasicProfessionalInfo.css";

function BasicProfessionalInfo({ history }) {
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/security-info");
  };
  return (
    <div className='BasicProfessionalInfo-parent-container'>
      {/* <ProgressBar number='2' /> */}
      <ServiceRegProcess step1 step2 />
      <div className='BasicProfessionalInfo-child-container'>
        <div className='BasicProfessionalInfo-logo'>
          Basic Professional Info
        </div>
        <div className='BasicProfessionalInfo-description'>
          Tell us about you. This information will appear on your public
          profile. So Buyer can know you better.
        </div>
        <div className='BasicProfessionalInfo-mandatory'>
          <span className='red__color'>*</span>Mandatory Filed
        </div>
        <form onSubmit={submitHandler} className='BasicProfessionalInfo-form'>
          <div className='BasicProfessionalInfo-input-section1'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Your Profession<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input
                className='BasicProfessionalInfo-profession'
                type='text'
                placeholder='Select Your Profession'
              />
            </div>
          </div>
          <div className='BasicProfessionalInfo-input-section2'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Skills<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input
                className='BasicProfessionalInfo-skills'
                type='text'
                placeholder='Add Skills'
              />
              <input
                className='BasicProfessionalInfo-experience'
                type='text'
                placeholder='Experience Level'
              />
              <button className='BasicProfessionalInfo-add-btn'>Add</button>
            </div>
          </div>
          <div className='BasicProfessionalInfo-input-section3'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Education<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input
                className='BasicProfessionalInfo-School'
                type='text'
                placeholder='School/College/University'
              />
              <div className='BasicProfessionalInfo-group-result'>
                <input
                  className='BasicProfessionalInfo-group'
                  type='text'
                  placeholder='Group'
                />
                <input
                  className='BasicProfessionalInfo-result'
                  type='text'
                  placeholder='Result'
                />
              </div>
              <div className='BasicProfessionalInfo-title-year'>
                <input
                  className='BasicProfessionalInfo-title'
                  type='text'
                  placeholder='Title'
                />
                <input
                  className='BasicProfessionalInfo-year'
                  type='text'
                  placeholder='Year'
                />
              </div>
              <div className='BasicProfessionalInfo-add-btn-container'>
                <button className='BasicProfessionalInfo-add-btn'>Add</button>
              </div>
            </div>
          </div>
          <div className='BasicProfessionalInfo-input-section4'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Certificate
                <span className='red__color'>
                  <span className='red__color'>*</span>
                </span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input
                className='BasicProfessionalInfo-certificate-award'
                type='text'
                placeholder='Certificate or award (E.G. 1st place at national olympia)'
              />
              <input
                className='BasicProfessionalInfo-certificate-from'
                type='text'
                placeholder='Certificate from (E.G National Math Olympiad Camper, BdMO)'
              />
              <div className='BasicProfessionalInfo-certificate-year-add-btn'>
                <input
                  className='BasicProfessionalInfo-certificate-year'
                  type='text'
                  placeholder='Year'
                />
                <button className='BasicProfessionalInfo-add-btn'>Add</button>
              </div>
            </div>
          </div>
          <div className='BasicProfessionalInfo-input-section-5-to-11'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Expected Salary<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input type='text' placeholder='Your preferred salary' />
            </div>
          </div>{" "}
          <div className='BasicProfessionalInfo-input-section-5-to-11'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Tuition days in week<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input type='text' placeholder='Your preferred days' />
            </div>
          </div>{" "}
          <div className='BasicProfessionalInfo-input-section-5-to-11'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Preferred style<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input type='text' placeholder='Your preferred style' />
            </div>
          </div>
          <div className='BasicProfessionalInfo-input-section-5-to-11'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Preferred Medium Of Education
                <span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input type='text' placeholder='Your preferred medium' />
            </div>
          </div>
          <div className='BasicProfessionalInfo-input-section-5-to-11'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Preferred classes<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input type='text' placeholder='Your preferred class' />
            </div>
          </div>
          <div className='BasicProfessionalInfo-input-section-5-to-11'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Preferred subjects<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input type='text' placeholder='Your preferred subjects' />
            </div>
          </div>{" "}
          <div className='BasicProfessionalInfo-input-section12'>
            <div className='BasicProfessionalInfo-form-label-container'>
              <label className='BasicProfessionalInfo-form-label'>
                Preferred areas<span className='red__color'>*</span>
              </label>
            </div>
            <div className='BasicProfessionalInfo-form-input-container'>
              <input
                className='BasicProfessionalItnfo-distric'
                type='text'
                placeholder='Select District'
              />
              <input
                className='BasicProfessionalInfo-areas'
                type='text'
                placeholder='Select Areas'
              />
            </div>
          </div>
          <div className='BasicProfessionalInfo-continue-button'>
            <button type='submit' className='btn margin_bottom button-primary'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicProfessionalInfo;
