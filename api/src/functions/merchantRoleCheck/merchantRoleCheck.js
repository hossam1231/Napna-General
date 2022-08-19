import { logger } from "src/lib/logger";

const axios = require("axios").default;

logger.info("Invoked merchantRoleCheck function");

let HEADERS = {
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Max-Age": "8640",
  "Access-Control-Allow-Origin": "*"
};

export const handler = async (event) => {
  const { token } = event.queryStringParameters;

  async function verifyFirebaseIdToken(token) {
    try {
      var res = await axios.get(
        'http://napna.co.uk/.netlify/functions/verifyFirebaseIdToken?token=${token}'
      )
      return res.data;
    } catch (e) {
      return {};
    }
  }

  async function getPartnerId(userId) {
    try {
      var res = await axios.get(
        'http://napna.co.uk/.netlify/functions/getPartnerId?userId=${userId}'
      )
      return res.data;
    } catch (e) {
      return {};
    }
  }

  let userId = await verifyFirebaseIdToken(token);

  // If the above functions returned {} that means we met an error in axios, otherwise it's a json
  // so get the relevent field from response1
 let partnerId = await getPartnerId(userId);




  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
     [ userId , partnerId ]
    })
  };
};