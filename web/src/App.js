import { Auth0Provider } from '@auth0/auth0-react'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const App = () => (
  <Auth0Provider
    domain="dev-wemn14jq.eu.auth0.com"
    clientId="rLvRC5tCEagZintxJXo9bZjxRKjjev5k"
    redirectUri={window.location.origin}
    audience="https://dev-wemn14jq.eu.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider type="dbAuth">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  </Auth0Provider>
)

export default App
