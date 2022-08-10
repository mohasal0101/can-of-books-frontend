import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();
  
  return isAuthenticated && (
    <div style={{textAlign: 'center', margin: '10px 0px'}}>
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
    </div>
  );
}

export default LogoutButton;