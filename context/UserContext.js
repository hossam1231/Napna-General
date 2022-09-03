import React, { useState } from "react"
import GetPartnerData from "../functionsLocal/GetPartnerData"

const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
  const [state, setState] = React.useState({})

  React.useEffect(() => {
    if (state.user) {
      setState({ ...state ,  partner:  GetPartnerData(state.user.uid) })
    }
  }, [state])


  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }