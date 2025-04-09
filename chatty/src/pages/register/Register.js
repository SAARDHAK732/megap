import React, { useState, useEffect } from 'react';
import "./Register.scss";
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
const Register = () => {
  return (
    <div className="auth-inner">
      <div className="alerts alert-error" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
            <Input
            id="username"
            name="username"
            type="text"
            value="username"
            labelText="Username"
            placeholder="Enter Username"
            // style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            // handleChange={(event) => setUsername(event.target.value)}
            />
            <Input
            id="email"
            name="email"
            type="text"
            value="email"
            labelText="Email"
            placeholder="Enter your email"
            // style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            // handleChange={(event) => setUsername(event.target.value)}
            />
            <Input
            id="password"
            name="password"
            type="password"
            value="password"
            labelText="Password"
            placeholder="Enter Password"
            // style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            // handleChange={(event) => setPassword(event.target.value)}
          />
      <label className="checkmark-container" htmlFor="checkbox">
        <input id="checkbox" type="checkbox" name="checkbox" />
            Keep me signed in
       </label>
       </div>
       <Button
        //   label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIN'}`}
           label={"Sign Up"}
          className="auth-button button"
        //   disabled={!username || !password}
        disabled={true}/>
      </form>
    </div>
  );
};

export default Register;
