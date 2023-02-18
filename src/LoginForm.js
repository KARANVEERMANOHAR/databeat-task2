import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import './LoginForm.css';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
