import React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import { Transition } from 'react-spring/renderprops';
import './style.css';

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
                    <form className="form-login">
                      <input type="text" placeholder="UserName" />
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <input type="password" placeholder="Re-Password" />
                      <button type="submit">Register</button>
                    </form>
                  </div>
                )
              : (props) => (
                  <div style={props}>
                    <div className="social-icons">
                      <a href="http://localhost:8080/auth/google" className="fab fa-google"></a>
                      <a href="http://localhost:8080/auth/facebook" className="fab fa-facebook-f"></a>
                    </div>
                    <form className="form-login">
                      <input type="text" placeholder="UserName" />
                      <input type="password" placeholder="Password" />
                      <div className="remember-box">
                        <input type="checkbox" id="remember-password" />
                        <label for="remember-password">Remember me?</label>
                      </div>
                      <button type="submit">Login</button>
                    </form>
                  </div>
                )
          }
        </Transition>
      </div>
    </div>
  );
};

export default SignInSignUp;
