// import { initializeApp } from "firebase-admin/app";

import { logger } from "src/lib/logger";

// var admin = require("firebase-admin");

// When authorizing via a service account, you have two choices for providing the credentials to your application. You can either set the GOOGLE_APPLICATION_CREDENTIALS environment variable, or you can explicitly pass the path to the service account key in code. The first option is more secure and is strongly recommended
// var serviceAccount = require("./serviceAccountKey.json");

let HEADERS = {
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin",
  "Content-Type": "application/json", //optional
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "8640",
};

HEADERS["Access-Control-Allow-Origin"] = "*";
HEADERS["Vary"] = "Origin";
HEADERS["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS";

export const handler = async (event, context) => {


  logger.info("Invoked verifyFirebaseIdToken function");
  return {
    statusCode: 200,
    HEADERS,
    body: JSON.stringify({hello: "world"}),
  };
};
