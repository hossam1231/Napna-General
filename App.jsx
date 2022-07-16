import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import LoadingScreen from "./screens/loading/LoadingScreen";

const App = () => {
  return (
    <NativeBaseProvider>
      <LoadingScreen
        spinnerColor="black"
        textColor="black"
        accessibilityLabel="Loading"
      />
    </NativeBaseProvider>
  );
};

export default App;
