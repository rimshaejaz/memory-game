import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

// handles logout with auth0 redirect 

const LogOut = () => {
    const { logout } = useAuth0()
  return (
    <button className='logoutButton' onClick={() => logout()}>
        Log Out
    </button>
  );
};

export default LogOut;

