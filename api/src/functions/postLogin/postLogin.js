import { logger } from "src/lib/logger";
import fetch from "node-fetch";

logger.info("Invoked postLogin function");
let HEADERS = {
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Max-Age": "8640",
  "Access-Control-Allow-Origin": "*",
};

let res;

export const handler = async (event, context) => {
  const { token, site } = event.queryStringParameters;
  //all outward facing api should expect a token to validate before continuing

  async function getVerifiedUserId() {
    let APIURL =
      "http://napna.co.uk/.netlify/functions/verifyFirebaseIdToken?token=REPLACE_TOKEN";
    APIURL = APIURL.replace("REPLACE_TOKEN", token);
    console.log(APIURL, "sending out request");
    res = await fetch(APIURL);
    if (res.ok) {
      const verifiedUserIdRaw = await res.json();
      return verifiedUserIdRaw;
    }
  }

  if (site == "Merchant") {
    if (token) {
      verifiedUserId = await getVerifiedUserId();
    }
  }

  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({
      data: [token, site, res],
    }),
  };
};
