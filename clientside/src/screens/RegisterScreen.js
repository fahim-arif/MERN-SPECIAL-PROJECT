import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import Message from "../components/common/Message";
import "../css/Registration.css";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(1, 2, 3);

    dispatch(register(email, phoneNumber, password));
  };
  return (
    <div className='registration'>
      <form onSubmit={submitHandler} className='reg_form'>
        <div className='title'>Registration</div>
        {/* {message && <Message>{message}</Message>} */}
        <div className='user_details'>
          {/* <div className='input_box'>
            <span className='details'>Full Name</span>
            <input type='text' required placeholder='Enter your name' />
          </div> */}
          {/* <div className='input_box'>
            <span className='details'>User Name</span>
            <input type='text' required placeholder='Enter your user name' />
          </div> */}
          <div className='input_box'>
            <span className='details'>Email</span>
            <input
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder='Enter your email'
            />
          </div>
          <div className='input_box'>
            <span className='details'>Phone Number</span>
            <input
              type='text'
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder='Enter your number'
            />
          </div>
          <div className='input_box'>
            <span className='details'>Password</span>
            <input
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Enter your password'
            />
          </div>
          <div className='input_box'>
            <span className='details'>Confirm Password</span>
            <input type='password' required placeholder='Confirm password' />
          </div>
        </div>
        <div className='terms_condition'>
          <label className='check'>
            Terms and Conditions
            <input type='checkbox' required />
            <span className='checkmark'></span>
          </label>
        </div>
        Already Have an Account?
        <Link to='login'>Login</Link>
        <Button className='my-3' type='submit'>
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterScreen;
