import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Authorization(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="formSignin">
      {/* //  onSubmit={pushSubmit}> */}
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
      <button type="submit" className="submit">
        Add contact
      </button>
    </form>
  );
}

Authorization.propTypes = {};

export default Authorization;
