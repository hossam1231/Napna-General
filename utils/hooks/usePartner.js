import React, { useState, useEffect } from "react";
import {
  getLocalStorageObject,
  setLocalStorageObject,
} from "../../data/LocalStorage";
import { fetchPartner } from "../../functions/backend/fetchPartner";
import { useAuthentication } from "./useAuthentication";

// CUSTOM HOOK BELOW

export default function usePartner(key) {
  const [partner, setPartner] = useState({});
  const user = useAuthentication();

  async function partnerCall() {
    try {
      let partnerBackend = await fetchPartner(user);
      partnerBackend
        ? setPartner(partnerBackend)
        : setPartner(
            "A partner associated with this account has not been found."
          );
    } catch (error) {
      console.log(error);
    }
  }

  async function partnerHandler() {
    try {
      let partnerls = await getLocalStorageObject({
        key: `[Partner]${user.uid}`,
      });
      partnerls ? setPartner(partnerls) : partnerCall();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    user ? partnerHandler() : null;
    // this makes sense and if it doesnt hallmark it this is swag
  }, [user]);

  return [partner, setPartner];
}
