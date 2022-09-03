import { LoadingContextProvider } from './LoadingContext'
import { UserContextProvider } from './UserContext'

const AllContextProviders = ({ children }) => {
    // Add additional context providers here
    return <LoadingContextProvider><UserContextProvider>{children}</UserContextProvider></LoadingContextProvider>
}

export default AllContextProviders