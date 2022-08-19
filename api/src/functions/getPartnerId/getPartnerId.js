import { db } from 'src/lib/db'
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
  const { userId } = event.queryStringParameters

  logger.info('Invoked getPartnerId function')

  const partnerId = await db.partner.findUnique({
    where: {
      userId: userId,
    },
  })

  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
      partnerId
    }),
  }
}
