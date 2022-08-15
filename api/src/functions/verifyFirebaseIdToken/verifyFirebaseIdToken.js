import { logger } from 'src/lib/logger'
import { initializeApp } from 'firebase-admin/app'

var admin = require('firebase-admin')

var serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://napna-9faa1-default-rtdb.europe-west1.firebasedatabase.app',
})


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

export const handler = async (event) => {

  // sets the default response
  let statusCode = 200
  let uid
  try {
    // get the two numbers to divide from the event query string
    const { token } = event.queryStringParameters

    // make sure the values to divide are provided
    if (token === undefined ) {
      statusCode = 400
      message = `Please specify a firebase token to verify.`
      throw Error(message)
    }

    // check if the numbers could be divided
    if (token == null || token == '') {
      statusCode = 500
      message = `Sorry Could authenticate token ${token}`
      throw Error(message)
    }

admin.getAuth(token)
  .verifyIdToken(token)
  .then((decodedToken) => {
    const uid = decodedToken.uid
    return uid
  })
  .catch((error) => {
    return error.message
  })

   uid = await getAuth(token)

    return {
      statusCode,
      HEADERS,
      body:
        JSON.stringify([
          uid
        ]),
    }
  } catch (error) {
    return {
      statusCode,
      body: {
        message: error.message,
      },
    }
  }
}





