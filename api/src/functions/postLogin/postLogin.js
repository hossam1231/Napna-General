import { logger } from 'src/lib/logger'

let HEADERS = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '8640',
  'Access-Control-Allow-Origin': '*',
}

export const handler = async (event, context) => {
  //all outward facing api should expect a token to validate before continuing
  logger.info('Invoked postLogin function')

let res
  const { token, site } = event.queryStringParameters

if (site == "Merchant") {

res = "COOL"
}



  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
      data: [token, site, res],
    }),
  }
}
