import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Ragistration(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const pushSubmit = e => {
    //  e.preventDefault();
    //  const URL = 'https://connections-api.herokuapp.com';
    //  const options = {
    //    method: 'POST',
    //    body: JSON.stringify({ name, email, password }),
    //    headers: {
    //      'Content-Type': 'application/json; charset=UTF-8',
    //    },
    //  };
    //  const res = await fetch(`${URL}/users/signup`, options);
    //  //  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
    //  res.json().then(data => console.log(data));
  };

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
      <button type="submit" className="submit">
        Add contact
      </button>
    </form>
  );
}

Ragistration.propTypes = {};

export default Ragistration;
