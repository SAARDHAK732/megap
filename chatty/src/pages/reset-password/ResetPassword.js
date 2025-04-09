import './ResetPassword.scss';
import React from 'react'
import { Link } from 'react-router-dom';
import Input from "../../components/input/Input";
import Button from '../../components/button/Button';
import { FaArrowLeft } from 'react-icons/fa'; // Changed to left arrow for "Back to Login"
const ResetPassword = () => {
  return (
    <div>
      <div className="container-wrapper" style={{ backgroundImage: `url('/images/background.jpg')` }}>
    <div className="container-wrapper-auth">
        {/* <div className="tabs reset-password-tabs" style={{ height: `${responseMessage ? '400px' : '' }` }}> */}
            <div className="tabs-auth">
                <ul className="tab-group">
                    <li className="tab">
                        <div className="login reset-password">Reset Password</div>
                    </li>
                </ul>
                <div className="tab-item">
                    <div className="auth-inner">
                        <div className="alerts" role="alert">
                            Error message
                        </div>
                        <form className="reset-password-form">
                            <div className="form-input-container">
                                <Input id="password" name="password" type="password" value="enter a password"
                                    labelText="New Password" placeholder="New Password" handleChange={()=> {}}
                                />
                                <Input id="cpassword" name="cpassword" type="password" value="enter a password"
                                    labelText="Confirm Password" placeholder="Confirm Password" handleChange={()=> {}}
                                />
                            </div>
                            <Button label="RESET PASSWORD" className="auth-button button" disabled={false} />

                            <Link to={'/'}>
                            <span className="login">
                                <FaArrowLeft className="arrow-left" /> Back to Login
                            </span>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ResetPassword
