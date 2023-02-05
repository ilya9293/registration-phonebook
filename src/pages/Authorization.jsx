import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/auth/authOperations';
import { getError, getLoading } from '../redux/auth/authSelectors';
import { errorReset } from '../redux/auth/authSlice';

function Authorization(props) {
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

  const pushSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const isDisabled = !email || !password || loading;

  return (
    <form className="formSignin" onSubmit={pushSubmit}>
      <label>
        E-mail
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" className="submit" disabled={isDisabled}>
        Login
      </button>
    </form>
  );
}

Authorization.propTypes = {};

export default Authorization;
