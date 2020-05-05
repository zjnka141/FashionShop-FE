/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import { Transition } from 'react-spring/renderprops';
import './style.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Tên đăng nhập tối thiểu 3 ký tự')
    .max(50, 'Tên đăng nhập tối đa 50 ký tự')
    .required('Vui lòng nhập trường này!'),
  password: Yup.string()
    .min(6, 'Mật khẩu tối thiểu 6 ký tự')
    .max(50, 'Mật khẩu tối đa 50 ký tự')
    .required('Vui lòng nhập trường này!'),
});

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="signin-container">
      <div className="form-box">
        <div className="button-box">
          <div id="translate-btn" className={isSignUp ? 'right' : null}></div>
          <button className="toggle-btn" onClick={() => setIsSignUp(false)}>
            Log in
          </button>
          <button className="toggle-btn" onClick={() => setIsSignUp(true)}>
            Register
          </button>
        </div>

        {/* <form className="form-login">
          <input type="text" placeholder="UserName"/>
          <input type="password" placeholder="Password"/>
          <div className="remember-box"><input type="checkbox" id="remember-password"/><label for="remember-password">Remember me?</label></div>
          <button type="submit">Login</button>
        </form> */}
        <Transition
          config={{ duration: 250 }}
          items={isSignUp}
          from={{
            position: 'absolute',
            opacity: 0,
            transform: 'translateX(-20%)',
          }}
          enter={{ opacity: 1, transform: 'translateX(10%)' }}
          leave={{ opacity: 0, transform: 'translateX(-20%)' }}
        >
          {(isSignUp) =>
            isSignUp
              ? (props) => (
                  <div style={props}>
                    <RegisterForm />
                  </div>
                )
              : (props) => (
                  <div style={props}>
                    <div className="social-icons">
                      <a
                        href="http://localhost:8080/auth/google"
                        className="fab fa-google"
                      ></a>
                      <a
                        href="http://localhost:8080/auth/facebook"
                        className="fab fa-facebook-f"
                      ></a>
                    </div>
                    <LoginForm />
                  </div>
                )
          }
        </Transition>
      </div>
    </div>
  );
};

export default SignInSignUp;
