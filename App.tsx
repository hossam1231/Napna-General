import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import './config/firebase';
import RootNavigation from './navigation';
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <ThemeProvider>
      <NativeBaseProvider>
              <RootNavigation />
      </NativeBaseProvider>
    </ThemeProvider>
  );
}