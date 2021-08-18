import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { register } from "../../actions/userActions";
import Message from "../common/Message";

import "../../css/SignIn.css";

const SignUp = ({ history, location }) => {
  const [nextStep, setNextStep] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [message2, setMessage2] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    console.log(location);
    if (userInfo) {
      setMessage(" Registration completed successfully");
      history.push("/");
    }
  }, [history, userInfo]);

  const nextStepHandler = (e) => {
    e.preventDefault();
    setNextStep(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (username.length < 6) {
      setMessage2(
        "That’s too short. A great username must include at least 6 characters."
      );
    }
    if (password.length < 8 && confirmPassword.length < 8) {
      setMessage("Password must be min. 8 characters.");
    } else if (confirmPassword !== password) {
      setMessage("Password did not matched");
    } else if (username.length >= 6) {
      setMessage("");
      setMessage2("");
      dispatch(register(username, email, password));
    }
  };
  return (
    <>
      {error && <Message>{error}</Message>}
      {nextStep ? (
        <div className='SignUp-container'>
          <form onSubmit={submitHandler} className='SignUp-form'>
            <div className='SignIn-heading'>Join In To Shobcity</div>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className='SignIn-email'
              type='text'
              placeholder='Choose Your Username'
            />
            <div className='alertMessage'>
              {message2 && <Message>{message2}</Message>}
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className='SignIn-email'
              type='text'
              placeholder='Choose Your Password'
            />
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className='SignIn-email'
              type='text'
              placeholder='Confirm Your Password'
            />
            <div className='alertMessage'>
              {message && <Message>{message}</Message>}
            </div>

            {/* <div className='SignIn-remember-forgot-cotainer'>
              8 characters or longer. Combine upper and lowercase letters and
              numbers.
            </div> */}
            <div className='SignIn-button-continue-container'>
              <button className='SignIn-button-continue'>Join</button>
            </div>
            <div className='SignIn-remember-forgot-cotainer text-center'>
              By joining, you agree to ShobCity's Terms of Service, as well as
              to receive occasional emails from us
            </div>

            <div className='SignIn-join-now-button'>
              Already Joined?
              <Link className='SignIn-join-now'>Sign In</Link>
            </div>
          </form>
        </div>
      ) : (
        <div className='SignUp-container'>
          <form onSubmit={nextStepHandler} className='SignUp-form'>
            <div className='SignIn-heading'>Join In To Shobcity</div>

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
              onChange={(e) => setEmail(e.target.value)}
              className='SignIn-email'
              type='email'
              placeholder='Enter Your Email'
            />

            <div className='SignIn-button-continue-container'>
              <button type='submit' className='SignIn-button-continue'>
                Continue
              </button>
            </div>

            <div className='SignIn-remember-forgot-cotainer text-center'>
              By joining I agree to receive emails from ShobCity.
            </div>
            <div className='SignIn-join-now-button'>
              Already Joined?
              <Link className='SignIn-join-now'>Sign In</Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUp;
