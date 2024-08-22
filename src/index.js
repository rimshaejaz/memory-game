import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
import Game from './Game';
import { Auth0Provider } from '@auth0/auth0-react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Game />
//     </BrowserRouter>
//   </React.StrictMode>
// );
{/* <Auth0Provider 
domain={domain}
clientId={clientId}
redirectUri={`${window.location.origin}/game`}> */}
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

export default function Nav() {
  return (
    <Auth0Provider 
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Nav />);
