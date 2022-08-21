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

  async function saveToFirestore() {
    let APIURL =
      'https://us-central1-napna-9faa1.cloudfunctions.net/writeToFirestore'
    APIURL = APIURL.replace('REPLACE_COLLECTION_NAME', collection)
    try {
      var res = await axios({
        method: 'post',
        url: APIURL + '?collection=' + collection,
        data: {
          foo: 'bar',
        },
      })
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
