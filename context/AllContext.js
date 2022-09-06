import { LoadingContextProvider } from "./LoadingContext";

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return <LoadingContextProvider>{children}</LoadingContextProvider>;
};

export default AllContextProviders;
