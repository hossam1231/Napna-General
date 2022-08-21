import { logger } from 'src/lib/logger'

const axios = require('axios').default

logger.info('Invoked merchantRoleCheck function')

let HEADERS = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '8640',
  'Access-Control-Allow-Origin': '*',
}

export const handler = async (event) => {
  const { collection } = event.queryStringParameters
  const { encodedUriJsonData } = event.queryStringParameters
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI

  async function saveToFirestore() {
     let APIURL =
       'http://napna.co.uk/.netlify/functions/getPartnerId?collection=REPLACE_WITH_USER_ID&data=REPLACE_WITH_DATA'
    APIURL = APIURL.replace('REPLACE_WITH_COLLECTION', collection)
    APIURL = APIURL.replace('REPLACE_WITH_DATA', encodedUriJsonData)
     try {
       var res = await axios.get(APIURL)
       return res.data
     } catch (e) {
       return e
     }
  }

  let productResponse = await saveToFirestore()

  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify(productResponse),
  }
}
