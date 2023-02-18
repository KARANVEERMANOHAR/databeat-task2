import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from './AuthContext';
import LoginForm from './LoginForm';
import Welcome from './Welcome';

const App = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      {loggedIn ? <Welcome /> : <LoginForm />}
    </div>
  );
};

const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;
