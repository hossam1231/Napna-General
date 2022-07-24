import * as firebaseAuth from '@firebase/auth'
import { initializeApp, getApp, getApps } from 'firebase/app'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { Toaster } from '@redwoodjs/web/dist/toast'

import GlobalStyles from 'src/components/GlobalStyles'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const firebaseApp = ((config) => {
  const apps = getApps()
  if (!apps.length) {
    initializeApp(config)
  }
  return getApp()
})(firebaseConfig)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp, // optional
}

export const getCurrentUser = async (decoded, { token, type }) => {
  const { email, uid } = await firebaseApp.auth().verifyIdToken(token)
  return { email, uid }
}

const App = () => (
  <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
    <FatalErrorBoundary page={FatalErrorPage}>
      <AuthProvider client={firebaseClient} type="firebase">
        <RedwoodApolloProvider>
          <Routes />
          <Toaster
            toastOptions={{
              success: {
                iconTheme: {
                  primary: 'var(--primary)',
                  secondary: 'var(--white)',
                },
              },
            }}
          />
          <GlobalStyles />
        </RedwoodApolloProvider>
      </AuthProvider>
    </FatalErrorBoundary>
  </RedwoodProvider>
)

export default App
