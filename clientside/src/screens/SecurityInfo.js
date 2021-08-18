import React from "react";
import ServiceRegProcess from "../components/Register & Login/ServiceRegProcess";

// import ProgressBar from "./ProgressBar";
import "../css/SecurityInfo.css";

function SecurityInfo() {
  return (
    <div className='SecurityInfo-parent-container'>
      <ServiceRegProcess step1 step2 step3 step4 />
      {/* <ProgressBar number='4' /> */}
      <div className='SecurityInfo-child-container'>
        <div className='SecurityInfo-logo'>Security Information</div>
        <div className='SecurityInfo-description'>
          Tell us about you. This information will appear on your public
          profile. So Buyer can know you better.
        </div>
        <div className='SecurityInfo-mandatory'>
          <span className='red__color'>*</span>Mandatory Filed
        </div>
        <form className='SecurityInfo-form'>
          <div className='SecurityInfo-input-section1'>
            <div className='SecurityInfo-form-label-container'>
              <label className='SecurityInfo-form-label'>
                Verify Your Email<span className='red__color'>*</span>
              </label>
            </div>
            <div className='SecurityInfo-form-input-container'>
              <button className='SecurityInfo-add-btn'>Verify</button>
            </div>
          </div>
          <div className='SecurityInfo-input-section2'>
            <div className='SecurityInfo-form-label-container'>
              <label className='SecurityInfo-form-label'>
                Verify Your Phone<span className='red__color'>*</span>
              </label>
            </div>
            <div className='SecurityInfo-form-input-container'>
              <button className='SecurityInfo-add-btn'>Verify</button>
            </div>
          </div>
          <div className='Security-continue-button'>
            <button className='btn margin_bottom button-primary'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecurityInfo;
