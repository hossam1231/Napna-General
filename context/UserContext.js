import React, { useState } from "react"

const UserContext = React.createContext()

const UserContextProvider =  ({ children }) => {
  const [state, setState] = React.useState({})
  //  this then accepts the auth to the context else where making it state : user:user

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }