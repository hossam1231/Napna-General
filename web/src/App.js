import * as firebaseAuth from '@firebase/auth'
import * as firebaseFirestore from '@firebase/firestore'
import * as firebaseStorage from '@firebase/storage'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './scaffold.css'
import './index.css'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM')

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  /** Optional config, may be needed, depending on how you use firebase
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  **/
}

const firebaseApp = ((config) => {
  const apps = getApps()
  if (!apps.length) {
    initializeApp(config)
  }
  return getApp()
})(firebaseConfig)

export const db = getFirestore(firebaseApp)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp, // optional
}

const App = () => {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret:
  //     'sk_test_51LNyErCxxfkrV4qVxgRtQnKUVZzsESr319SxPxC3W931Y71KFCwIAENURogmhodaZZfl3FcmMcU5hOowPLzcMjZR00Ro8GA1vf',
  // }
  return (
    // <Elements stripe={stripePromise} options={options}>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider client={firebaseClient} type="firebase">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
    // </Elements>
  )
}

export default App
