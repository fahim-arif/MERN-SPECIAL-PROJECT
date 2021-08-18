import React, { useState } from "react";
import ServiceRegProcess from "../components/Register & Login/ServiceRegProcess";
import { useDispatch, useSelector } from "react-redux";

import "../css/PersonalInfo.css";
import picture from "../components/images/picture.png";

const PersonalInfo = ({ history }) => {
  const userRegister = useSelector((state) => state.userRegister);
  const { personalInfo } = userRegister;
  const [profilePicture, setProfilePicture] = useState({ file: null });

  const [firstName, setFirstName] = useState(personalInfo.firstName);
  const [lasttName, setLastName] = useState(personalInfo.lastName);
  const [gender, setGender] = useState(personalInfo.gender);
  const [phone, setPhone] = useState(personalInfo.phone);
  const [description, setDescription] = useState(personalInfo.description);

  const onSetProfilePicture = (event) => {
    setProfilePicture({ file: event.target.files });
    console.log(profilePicture);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/professional-info");
  };

  return (
    <div className='PersonalInfo-parent-container'>
      <ServiceRegProcess step1 />
      <div className='PersonalInfo-child-container'>
        <div className='PersonalInfo-logo'>Personal Info</div>
        <div className='PersonalInfo-description'>
          Tell us about you. This information will appear on your public
          profile. So Buyer can know you better.
        </div>
        <div className='BasicProfessionalInfo-mandatory'>
          <span className='red__color'>*</span>Mandatory Filed
        </div>
        <form onSubmit={submitHandler} className='PersonalInfo-form'>
          <div className='PersonalInfo-input-section1'>
            <div className='PersonalInfo-form-label-container'>
              <label className='PersonalInfo-form-label'>
                Full Name<span className='red__color'>*</span>
              </label>
            </div>
            <div className='PersonalInfo-form-input-container'>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='PersonalInfo-first-name'
                type='text'
                placeholder='First Name'
              />
              <input
                value={lasttName}
                onChange={(e) => setLastName(e.target.value)}
                className='PersonalInfo-last-name'
                type='text'
                placeholder='Last Name'
              />
            </div>
          </div>
          <div className='PersonalInfo-input-section2'>
            <div className='PersonalInfo-form-label-container'>
              <label className='PersonalInfo-form-label'>
                Gender<span className='red__color'>*</span>
              </label>
            </div>
            <div className='PersonalInfo-form-input-container'>
              <input
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className='PersonalInfo-radio'
                type='radio'
                name='gender'
              />
              <label className='PersonalInfo-form-label-male'>Male</label>
              <input
                className='PersonalInfo-radio'
                type='radio'
                name='gender'
              />
              <label className='PersonalInfo-form-label-female'>Female</label>
            </div>
          </div>
          <div className='PersonalInfo-input-section3'>
            <div className='PersonalInfo-form-label-container'>
              <label className='PersonalInfo-form-label'>
                Phone Number<span className='red__color'>*</span>
              </label>
            </div>
            <div className='PersonalInfo-form-input-container'>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='PersonalInfo-phone'
                type='text'
                placeholder='Your Number'
              />
            </div>
          </div>
          <div className='PersonalInfo-input-section4'>
            <div className='PersonalInfo-form-label-container'>
              <label className='PersonalInfo-form-label'>
                Profile Picture<span className='red__color'>*</span>
              </label>
            </div>
            <div className='PersonalInfo-form-input-container PersonalInfo-input-pic'>
              <img
                className='PersonalInfo-profile-pic'
                src={picture}
                alt='profile_picture'
              ></img>
              <input
                className='PersonalInfo-input-pic'
                type='file'
                onChange={onSetProfilePicture}
              />
            </div>
          </div>
          <div className='PersonalInfo-input-section5'>
            <div className='PersonalInfo-form-label-container'>
              <label className='PersonalInfo-form-label'>
                Description<span className='red__color'>*</span>
              </label>
            </div>
            <div className='PersonalInfo-form-input-container'>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='PersonalInfo-personal-description'
                type='text'
                placeholder='Share about yourself, tell us about your work experience and projects you have completed and your area of expertise.'
              />
              <div className='PersonalInfo-personal-minimum'>
                minimum 50 characters
              </div>
            </div>
          </div>
          <div className='PersonalInfo-continue-button'>
            <button type='submit' className='btn margin_bottom button-primary'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
