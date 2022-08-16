import { logger } from 'src/lib/logger'

const fetch = require('node-fetch')

logger.info('Invoked postLogin function')
let HEADERS = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '8640',
  'Access-Control-Allow-Origin': '*',
}

let res

export const handler = async (event, context) => {
  const { token, site } = event.queryStringParameters
  //all outward facing api should expect a token to validate before continuing

  async function postLoginBackend() {
    let APIURL =
      'http://napna.co.uk/.netlify/functions/verifyFirebaseIdToken?token=REPLACE_TOKEN'
    APIURL = APIURL.replace('REPLACE_TOKEN', token)
    console.log(APIURL, 'sending out request')
    res = await fetch(APIURL)
    if (res.ok) {
      const data = await res.json()
      return data
    }
  }

  if (site == 'Merchant') {
    if (token) {
      res = await postLoginBackend()
    }
  }

  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
      data: [token, site, res],
    }),
  }
}
