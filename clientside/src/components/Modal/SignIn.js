import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../../actions/userActions";
import Message from "../common/Message";
import Loader from "../common/Loader";

import "../../css/SignIn.css";

const SignIn = ({ history }) => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;
    dispatch(login(enteredEmail, enteredPassword));
  };
  return (
    <>
        {error && <Message>{error}</Message>}
        {loading && <Loader></Loader>}
      <div className='SignIn-container'>
        <form onSubmit={submitHandler} className='SignIn-form'>
          <div className='SignIn-heading'>Sign In To Shobcity</div>

          <button className='SignIn-sign-in-fb-button'>
            <div className='SignIn-fb-icon-cotainer'>
              <i class='fab fa-facebook-f'></i>
            </div>
            Sign in with Facebook
          </button>

          <button className='SignIn-sign-in-google-button'>
            <div className='SignIn-google-icon-cotainer'>
              <i class='fab fa-google fa-2x'></i>
            </div>
            Sign in with Google
          </button>
          <div className='SignIn-or'>OR</div>
          <input
            ref={inputEmailRef}
            className='SignIn-email'
            type='text'
            placeholder='Email/Username'
          />

          <input
            ref={inputPasswordRef}
            className='SignIn-password'
            type='password'
            placeholder='Password'
          />
          <div className='SignIn-button-continue-container'>
            <button className='SignIn-button-continue'>Continue</button>
          </div>

          <div className='SignIn-remember-forgot-cotainer'>
            <button className='SignIn-remember'>Remember Me</button>
            <button className='SignIn-forgot'>Forgot Password</button>
          </div>
          <div className='SignIn-join-now-button'>
            Not a member yet?
            <Link className='SignIn-join-now'>Join Now</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
