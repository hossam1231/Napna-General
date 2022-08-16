import { logger } from 'src/lib/logger'

const fetch = require('node-fetch')

logger.info('Invoked merchantRoleCheck function')

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
  const { token } = event.queryStringParameters
  //all outward facing api should expect a token to validate before continuing

  async function verifyFirebaseIdToken() {
    let APIURL =
      'http://napna.co.uk/.netlify/functions/verifyFirebaseIdToken?token=REPLACE_TOKEN'
    APIURL = APIURL.replace('REPLACE_TOKEN', token)
    console.log(APIURL, 'sending out request')
    res = await fetch(APIURL)
    if (res.ok) {
      const confirmedUserId = await res.json()
      return confirmedUserId
    }
  }

  async function getPartnerId() {
    let APIURL =
      'http://napna.co.uk/.netlify/functions/getPartnerId?userId=REPLACE_USERID'
    APIURL = APIURL.replace('REPLACE_USERID', confirmedUserId)
    console.log(APIURL, 'sending out request')
    res = await fetch(APIURL)
    if (res.ok) {
      const partnerId = await res.json()
      return partnerId
    }
  }

  async function getMerchantId() {
    let APIURL =
      'http://napna.co.uk/.netlify/functions/getPartnerId?partnerId=REPLACE_PARTNERID'
    APIURL = APIURL.replace('REPLACE_PARTNERID', partnerId)
    console.log(APIURL, 'sending out request')
    res = await fetch(APIURL)
    if (res.ok) {
      const merchantId = await res.json()
      return merchantId
    }
  }

  let confirmedUserId = await verifyFirebaseIdToken()
  // √ get userId from toke
  let partnerId = await getPartnerId()
  // √ get partnerId from userId
  let merchantId = await getMerchantId()
  // √ get partnerId from userId
  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
      data: [merchantId],
    }),
  }
}
