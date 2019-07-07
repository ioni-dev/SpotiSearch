import React from 'react';
import { CLIENT_ID, AUTH_ENDPOINT, REDIRECT_URI, SCOPES } from '../common/Constants';
import '../styles/Login.css';

// here is the first thing that the user encounters, this is where i take them to the spotify authentication
// i bring my constants to use template literals to join them together with the href
const Login = () => {
  return (
    <div className='login-container'>
      <h1 className='title'>Kreitech Test</h1>
      <a className="btn"
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
          "%20")}&response_type=token&show_dialog=true`}>Login to Spotify
      </a>
    </div>
  )
}

export default Login;