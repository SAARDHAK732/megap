import React, { useState,useEffect } from 'react';
import './Register.scss';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { Utils } from '../../services/utils/utils.service';
import authService from '../../services/api/auth/auth-service';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const registerUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const avatarColor = Utils.avatarColor();
      const avatarImage = ''; // you can update this if needed

      const result = await authService.signUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage
      });

      setAlertType('alert-success');
      setHasError(false);
      setErrorMessage('Signup successful!'); // Optional success message
    } catch (error) {
      console.log('Signup error:', error?.response?.data);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (loading && !user) return;
    if (user) navigate('/app/social/streams');
  }, [loading, user, navigate]);
   
  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role="alert">
          {errorMessage}
        </div>
      )}
      <form className="auth-form" onSubmit={registerUser}>
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
            id="email"
            name="email"
            type="email"
            value={email}
            labelText="Email"
            placeholder="Enter your email"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(event) => setEmail(event.target.value)}
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
            <input id="checkbox" type="checkbox" name="checkbox" />
            Keep me signed in
          </label>
        </div>
        <Button
          label={loading ? 'SIGNUP IN PROGRESS...' : 'Signup'}
          className="auth-button button"
          disabled={!username || !email || !password}
        />
      </form>
    </div>
  );
};

export default Register;
