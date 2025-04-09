import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import "./ForgotPassword.scss"
import { FaArrowLeft } from 'react-icons/fa'; // Changed to left arrow for "Back to Login"
const ForgotPassword = () => {
  const [password, setPassword] = useState('');
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url('/images/background.jpg')` }}>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>
            <div className="tab-item"></div>
          </div>
        </div>

        {/* Auth Inner Section */}
        <div className="auth-inner">
          {/* <div className="alerts alert-error" role="alert">
            Error message
          </div> */}
          <form className="auth-form">
            <div className="form-input-container">
              <Input
                id="email"
                name="email"
                type="text"
                value="ganekantisaardhak1997@gmail.com"
                labelText="Email"
                placeholder="Enter Email"
                onChange={(event) => setPassword(event.target.value)} // Fixed handleChange
              />
            </div>
            <Button
              label="Sign In"
              className="auth-button button"
              disabled={!password} // Enabled only when password is entered
            />
            <Link to={'/'}>
              <span className="forgot-password">
                <FaArrowLeft className="arrow-left" /> Back to Login
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
