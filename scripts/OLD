import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { fetchPartner } from '../functions/local/fetchPartner'
import useLocalStorage from '../utils/hooks/useLocalStorage'

const HydratePartner = (user) => {
    const [User, setUser] = useContext(UserContext)
        let [localPartner, setLocalPartner] = useLocalStorage({ key: `[Partner]${user?.user?.uid}` })

  


    async function getPartner() {
        let partnerResult
        if (!user.partner) {
            partnerResult = localPartner
            if (!localPartner) {
                let fetchedPartner = await fetchPartner(user)
                partnerResult = fetchedPartner
            }
            setUser({ ...user, partner: partnerResult })
        }
    }

    useEffect(() => {
        if (user.user) {
            getPartner()
        }
    }, [user?.user])
    // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. 

    // we then get partner from the local storage using the firebaseUser we added else where

    // when partner is updated eventually using the user to make a call or local storage then update the segment on the exported state
    // local storage returns 'empty if its empty' so we can now make the api calls using the 
    return (
        <></>
    )
}

export default HydratePartner
