import React from "react";
import "../../css/login.css";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='registration'>
      <form className='reg_form'>
        <div className='title'>Login</div>
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
            <input type='email' required placeholder='Enter your email' />
          </div>
          <div className='input_box'>
            <span className='details'>Password</span>
            <input type='password' required placeholder='Enter your password' />
          </div>
        </div>
        Don't Have an Account Yet?
        <Link to='sign-in'>Register</Link>
        <Button className='my-3' type='submit'>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
