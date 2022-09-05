const axios = require("axios").default;
import { getIdToken } from "firebase/auth";

export async function fetchPartner(user) {
console.log(`fetching partner with uid of ${user.uid}`)
    const token =  await getIdToken(user, true)
    let APIURL =
        `http://napna.co.uk/.netlify/functions/merchantRoleCheck?token=${token}`;
    try {
        var res = await axios.get(APIURL);
        if (res.data === null) {
            console.log('A partner associated with this account has not been found.')
           return null
        } else {
            return(res.data);
        }
    } catch (e) {
        console.log("error merchant role check", e);
    }
}