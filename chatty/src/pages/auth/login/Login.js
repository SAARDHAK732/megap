import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.scss";
import { FaArrowRight,FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import { Utils } from '../../../services/utils/utils.service';
import authService from "../../../services/api/auth/auth-service";
import {useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';
import useSessionStorage from '../../../hooks/useSessionStorage';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [user, setUser] = useState();
  const [setStoredUsername] = useLocalStorage('username', 'set');
  const [setLoggedIn] = useLocalStorage('keepLoggedIn', 'set');
  const [pageReload]=useSessionStorage("pageReload","set");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser= async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await authService.signIn({
        username,
        password
      });
      setUser(result.data.user)
      setLoggedIn(keepLoggedIn);
      setStoredUsername(username);
      setHasError(false);
      setAlertType('alert-success');
      Utils.dispatchUser(result, pageReload, dispatch, setUser);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data.message);
    }
  }
    useEffect(() => {
      if (loading && !user) return;
      if (user) navigate('/app/social/streams');
    }, [loading, user, navigate]); 
  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
      <div className="alerts alert-error" role="alert">
        {errorMessage}
      </div>
      )}
      <form className="auth-form" onSubmit={loginUser}>
        <div className="form-input-container">
            <Input
            id="username"
            name="username"
            type="text"
            value={username}
            labelText="Username"
            placeholder="Enter Username"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setUsername(event.target.value)}
            />
            <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="Password"
            placeholder="Enter Password"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setPassword(event.target.value)}
          />
      <label className="checkmark-container" htmlFor="checkbox">
        <Input id="checkbox" type="checkbox" name="checkbox" value={keepLoggedIn} handleChange={() => setKeepLoggedIn(!keepLoggedIn)} />
            Keep me signed in
       </label>
       </div>
       <Button
          label={`${loading ? 'SIGNIN IN PROGRESS...' : 'SIGNIn'}`}
          className="auth-button button"
          disabled={!username || !password}/>
        <Link to={"/forgot-password"}>
        <span className="forgot-password">
            Forgot password?
        <FaArrowLeft className='arrow-right'/>    
        </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
