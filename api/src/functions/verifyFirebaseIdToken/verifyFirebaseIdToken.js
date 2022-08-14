import { initializeApp } from 'firebase-admin/app'

import { logger } from 'src/lib/logger'

var admin = require('firebase-admin')

// When authorizing via a service account, you have two choices for providing the credentials to your application. You can either set the GOOGLE_APPLICATION_CREDENTIALS environment variable, or you can explicitly pass the path to the service account key in code. The first option is more secure and is strongly recommended
var serviceAccount = require('./serviceAccountKey.json')

let HEADERS = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json', //optional
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '8640',
}

HEADERS['Access-Control-Allow-Origin'] = '*'
HEADERS['Vary'] = 'Origin'
HEADERS['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'

export const handler = async (event, context) => {
  const url = require('url')

  // get access to URLSearchParams object
  const search_params = url.searchParams

  // get url parameters
  const token = search_params.get('token')

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      'https://napna-9faa1-default-rtdb.europe-west1.firebasedatabase.app',
  })

  let uid

  // idToken comes from the client app
  admin
    .getAuth()
    .verifyIdToken(token)
    .then((decodedToken) => {
       uid = decodedToken.uid
    })
    .catch((error) => {
      // Handle error
      logger.error(error)
    })

  logger.info('Invoked verifyFirebaseIdToken function')
  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
      data: '$ √ Verified UserID{uid}$',
    }),
  }
}
