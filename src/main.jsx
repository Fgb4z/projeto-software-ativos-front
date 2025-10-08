import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-tv4os4iuxn3m6jo0.us.auth0.com"
      clientId="6cH1YwI7e5f2EPYDVWAhnPrqE5pwJzSs"
      authorizationParams={{
        audience: "https://dev-tv4os4iuxn3m6jo0.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)
