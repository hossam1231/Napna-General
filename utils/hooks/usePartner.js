import React, { useState, useEffect } from "react";
import {
  getLocalStorageObject,
  setLocalStorageObject,
} from "../../data/LocalStorage";
import { fetchPartner } from "../../functions/backend/fetchPartner";
import { useAuthentication } from "./useAuthentication";

// CUSTOM HOOK BELOW

export default function usePartner(key) {
  const [value, setValue] = useState({});
  const user = useAuthentication();

  async function partnerCall() {
    try {
      let partnerBackend = await fetchPartner(user);
      if (partnerBackend) {
        setValue(partnerBackend);
        try {
          let saveLs = await setLocalStorageObject({
            key: `[Partner]${user.uid}`,
          });
          console.log(saveLs);
        } catch (error) {
          console.log(error);
        }
      } else {
        setValue("A partner associated with this account has not been found.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function partnerHandler() {
    try {
      let partnerLs = await getLocalStorageObject({
        key: `[Partner]${user.uid}`,
      });
      console.log(partnerLs);
      if (partnerLs) {
        setValue(partnerLs);
      } else {
        console.log("no local record found fetching...");
        partnerCall();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    user ? partnerHandler() : null;
    // this makes sense and if it doesnt hallmark it this is swag
  }, [user]);

  return [value, setValue];
}
