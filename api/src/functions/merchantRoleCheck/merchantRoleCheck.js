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

    let APIURL=`http://napna.co.uk/.netlify/functions/verifyFirebaseIdToken?token=${token}`
    try {
      var res = await axios.get(
APIURL
      )
      return res.data;
    } catch (e) {
      return e;
    }
  }

  async function getPartnerId(userId) {
    let APIURL=`http://napna.co.uk/.netlify/functions/getPartnerId?userId=${userId}`
    try {
      var res = await axios.get(
APIURL
      )
      return res.data;
    } catch (e) {
      return e;
    }
  }

let userId = await verifyFirebaseIdToken(token);
  // If the above functions returned {} that means we met an error in axios, otherwise it's a json
  // so get the relevent field from
let partnerId = await getPartnerId(userId);

  if (partnerId == null) {
  partnerId  = "No partner record"
}

  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify(
     partnerId
    )
  };
};