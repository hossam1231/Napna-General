import React from 'react'
import { getLocalStorageObject } from '../data/LocalStorage'

const GetPartnerData = (user) => {
    const [partner, setPartner] = React.useState()

    async function merchantRoleCheck() {

        const token = await getIdToken(user, true)
        let APIURL =
            `http://napna.co.uk/.netlify/functions/merchantRoleCheck?token=${token}`;
        try {
            var res = await axios.get(APIURL);
            if (res.data === null) {
                console.log('A partner associated with this account has not been found.')
                setPartner('A partner associated with this account has not been found.')
            } else {
                setPartner(res.data);
                setLocalStorageObject({ key: `[Partner]${user.uid}`, value: res.data })
            }
        } catch (e) {
            console.log("error merchant role check", e);
        }
    }

    React.useEffect(() => {
        getLocalStorageObject({ key: `[Partner]${user.uid}` }).then(lsPartner => {
            if (!lsPartner) {
                merchantRoleCheck()
            } else {
                setPartner(lsPartner)
            }
        })
    }, [])

    return partner
}

export default GetPartnerData







