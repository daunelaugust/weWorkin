import {useAuth0} from '@auth0/auth0-react';
import React from 'react';

function LogoutButton() {
    const {logout, isAuthenticated} = useAuth0();
    return (
      isAuthenticated && (
          <button style={{
              appearance: 'none',
              outline: '0',
              backgroundColor: '#607EAA',
              border: '0',
              padding: '10px 15px',
              color: 'white',
              borderRadius: '3px',
              width: '250px',
              fontSize: '18px',
            }}  onClick={() => logout()}>
            Logout</button>
      )
    )
}

export default LogoutButton