import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { signUp } from '../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getLoading } from '../redux/auth/authSelectors';
import { errorReset } from '../redux/auth/authSlice';

function Ragistration(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  useEffect(() => {
    if (!error) return;
    alert(error);
    dispatch(errorReset());
  }, [dispatch, error]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const pushSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
    reset();
  };

  const isDisabled = !name || !email || !password || loading;

  return (
    <form className="formSignup" onSubmit={pushSubmit}>
      <label>
        Login
        <input type="text" name="name" required value={name} onChange={handleChange} />
      </label>
      <label>
        E-mail
        <input type="email" name="email" required value={email} onChange={handleChange} />
      </label>
      <label>
        Password
        <input type="password" name="password" required value={password} onChange={handleChange} />
      </label>
      <button type="submit" className="submit" disabled={isDisabled}>
        Add contact
      </button>
    </form>
  );
}

Ragistration.propTypes = {};

export default Ragistration;
