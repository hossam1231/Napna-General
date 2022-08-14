
import { logger } from 'src/lib/logger'

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

  logger.info('Invoked verifyFirebaseIdToken function')
  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({ hello: 'world' })
  }
}
