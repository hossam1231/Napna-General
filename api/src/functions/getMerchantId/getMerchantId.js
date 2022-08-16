import { logger } from 'src/lib/logger'

import { merchantByPartnerId } from '../../services/merchants/merchants'

let HEADERS = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '8640',
  'Access-Control-Allow-Origin': '*',
}

export const handler = async (event, context) => {
  const { partnerId } = event.queryStringParameters

  logger.info('Invoked getMerchantId function')

  let merchantId = merchantByPartnerId({ id: partnerId })

  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
      data: merchantId,
    }),
  }
}
