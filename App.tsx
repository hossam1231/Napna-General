import {React, useState, useEffect }from 'react';
import { ThemeProvider } from 'react-native-elements';
import './config/firebase';
import RootNavigation from './navigation';
import { NativeBaseProvider, Center, Spinner } from "native-base";
import useCachedResources from "./hooks/useCachedResources";
import './index.css'

export default function App() {
let isLoadingComplete = useCachedResources();


if (!isLoadingComplete) {
  return (
    <NativeBaseProvider>
<Center flex="1">
  <Spinner></Spinner>
</Center>
    </NativeBaseProvider>
  );
} else {
  return (
    <ThemeProvider>
      <NativeBaseProvider>
              <RootNavigation />
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
}
