import React from "react"

const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
  const [state, setState] = React.useState(false)

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }