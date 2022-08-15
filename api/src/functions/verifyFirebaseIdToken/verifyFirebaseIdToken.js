import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */

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

    return {
      statusCode,
      HEADERS,
      body:
        JSON.stringify([
         token
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





