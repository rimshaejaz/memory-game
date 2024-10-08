import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// handles login with auth0 redirect 

const LogIn = () => {
    const { loginWithRedirect } = useAuth0();

  return (
    <button className='loginButton' onClick={() => loginWithRedirect()}>
        Log In
    </button>
  );
};

export default LogIn;
