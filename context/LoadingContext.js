import React from "react"

const LoadingContext = React.createContext()

const LoadingContextProvider = ({ children }) => {
  const [state, setState] = React.useState(false)


  
  return (
    <LoadingContext.Provider value={[state, setState]}>
      {children}
    </LoadingContext.Provider>
  )
}

export { LoadingContext, LoadingContextProvider }