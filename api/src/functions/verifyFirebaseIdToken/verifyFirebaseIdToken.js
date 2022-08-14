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
  let message = ''

  try {
    // get the two numbers to divide from the event query string
    const { dividend, divisor } = event.queryStringParameters

    // make sure the values to divide are provided
    if (dividend === undefined || divisor === undefined) {
      statusCode = 400
      message = `Please specify both a dividend and divisor.`
      throw Error(message)
    }

    // divide the two numbers
    const quotient = parseInt(dividend) / parseInt(divisor)
    message = `${dividend} / ${divisor} = ${quotient}`

    // check if the numbers could be divided
    if (quotient === Infinity || isNaN(quotient)) {
      statusCode = 500
      message = `Sorry. Could not divide ${dividend} by ${divisor}`
      throw Error(message)
    }

    return {
      statusCode,
      HEADERS,
      body: {
        message,
        dividend,
        divisor,
        quotient,
      },
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





