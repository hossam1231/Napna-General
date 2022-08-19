import { getAuth } from 'firebase-admin/auth'

var admin = require('firebase-admin')

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: 'napna-9faa1',
    private_key_id: 'dd923c10e5e3bf86306f9feb5f799206caf54249',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC/UAimpSHh9iyt\nZKSHbwammfNKWUyokzHIvTcnz7ZfN8SpUnX4Dw8/0BEWqEDiIsvWd8spQXI0y/QZ\n6TnPbtBhdv4kdXQM77D5uYHPiOhbNukBEx+JNohCB0Oiw/Lif7T4P1ex6eN01Cc4\n+X5lSADwbr5Fx87NZfNv+iGNgqOQx+tzsNrEN2gdr0e39uci/Y1N3wHrnzPbO3Xw\nez+mpIGORAAQHJwsuq/XpN+giXnRp8aqQKNR1VTRudDuvkDWiyOKFHyOkw41BXkr\nc1AkE6Sh3FSBsEaifW5TSM5T0NfMWH0IIUYwZvEcGBSF5ISvStiBPPDO/SbDCzel\nKORgLsLLAgMBAAECggEAJ8VDhyEdAhRjBUi+y0jRYSDv6qzVutWeq9Rp+uS7TOAT\nCgASdhbrXKCsbMFde6UwKs2Mdm8chs0/WYOaePzYZOqPupSQI4BQkhl2WuZjJ1Mq\n7QZEsAmeGdvYu6VwgJV70X+Zg2rT1h2kabu0AuoNB+59r5Px8dEX4ldlUj2uMxJ/\nj6yJgymgRoYThfvFYMUUWHiGe0KiL3glmwon+XiaIooPF8T3hBaH9YgrmDWARhEO\nE0d/IlUwxafD4QlZcDwUYbqyMC7iDfmZN7rb1/JKBxLSCvH33u0dVoBTzBXTGeE/\nDN2Ekv8o2jYd9+yf9x16WWE+GRPDp6eQrb9cnVuOgQKBgQD9JKmeP3ZudRs0Vbe7\n0QAQXIIk3solv+s0/jEwJdfI+jSyOFQDb1/BYnSjDrB0V2gFERQolmP166rb996V\nb+/tvbNgKghDG5t/YkwNqvJI18SGEmQQk5wuLVF5NwWKkG+mvGEJaTDkuUqOggCV\naLvpoEKmdpRx7tH78nlJtAn12QKBgQDBeL20yFcVUKujUR+JycBcXmfbU1AROVWR\n6R/DXx3T4MvHRP35hyAUQ0dde7rMIy/k/jyExPt1i0DV1RpmOPRqTV+vNESzaEPP\nEa7IqKrd8Ylt+Cqi4AkoB1gY5n9A6cBh+z4H2tVRgj1cQyCqzvMFTGQgqYxk8Xnd\npXTvELTjQwKBgQDXBPQ6YaeELV59Nq4JD37hZuJ41PCZ3gm4io1XW12N7dEi7KuX\n+1s3lRyDgC+rsq69VwNrckrYEWSg0Us0Xc9Lfk3Fyg4YinOrYOA+38xKyVO5mhd6\n6RbJNl80+eJwDz13QB2gc8Q/E5BbudsrDbpHuIPEh4aRvAyK2CvjydSICQKBgGBo\nGxgHsKU1cqHKHc4aU5lzjYsUA9ThXgt8QFCpiAJ5hPHCJlB+DfUq5Vfm/NkWO5p/\nOYbrZWZYQrGLJEGF5f1GmwSCJi3EKe34IMFqkuJPpqy+ufg5bTaeGj8mNIkTMcNh\nX7KoUB3yqULdTFzxDNY6D7ba5dOzJIfXF+K8z3ZjAoGAZVPmvEMqfYXCF0ItkX4K\nL6MeEwEDa4w1RoBvFCbMtTAR2aW9zWMIA9ynTZkVQYA5jV0tJy/DYGpaq0dpGoP6\nH0HcsRezanDn1yij3AtKnnR7RkRwUQR3P5+OEuTErytRRH0IdRbcZspHqIudICTV\nNYUUQl3wPiixQHKMMrBZmGU=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-d6do1@napna-9faa1.iam.gserviceaccount.com',
    client_id: '107058300174890629901',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d6do1%40napna-9faa1.iam.gserviceaccount.com',
  }),
  databaseURL:
    'https://napna-9faa1-default-rtdb.europe-west1.firebasedatabase.app',
})

let HEADERS = {
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '8640',
  'Access-Control-Allow-Origin': '*',
}

export const handler = async (event) => {
  // sets the default response
  let statusCode = 200
  let uid
  try {
    // get the two numbers to divide from the event query string
    const { token } = event.queryStringParameters

    // make sure the values to divide are provided
    if (token === undefined) {
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

    const auth = getAuth(firebaseApp)

    try {
      const decodedToken = await auth.verifyIdToken(token)
      uid = decodedToken.uid
    } catch (error) {
      return error.message
    }
    return {
      statusCode,
      HEADERS,
      body: JSON.stringify({
        uid
      }),
    }
  } catch (error) {
    return {
      statusCode,
      HEADERS,
      body: {
        message: error.message,
      },
    }
  }
}
