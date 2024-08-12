import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-gp3wm4zzgdg0p4oo.us.auth0.com"
    clientId="WPvwXqsE85NzWxhGCpeQ44LJXR3EAkiR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>,
)
