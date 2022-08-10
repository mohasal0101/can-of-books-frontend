import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <div className='loginDiv' style={{textAlign: 'center', margin: '10px 0px'}}>
        <h2>Log in please.</h2>
        <p>Click on Log in button to be directed to our log in page</p>
    <button onClick={loginWithRedirect}>Log in</button>
    </div>
  );
}

export default LoginButton;