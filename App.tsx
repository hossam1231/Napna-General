import {React, useState, useEffect }from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from 'react-native-elements';
import './config/firebase';
import RootNavigation from './navigation';
import { NativeBaseProvider, Center, Spinner} from "native-base";
import useCachedResources from "./hooks/useCachedResources";
import './index.css'
import LoadingScreen from './screens/loading/LoadingScreen'

export default function App() {

let isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return (
			<NativeBaseProvider>
				<LoadingScreen />
			</NativeBaseProvider>
		);
	} else {
		return (
      <ThemeProvider>
			<NativeBaseProvider>
				<SafeAreaProvider>
			      <RootNavigation />
					<StatusBar />
				</SafeAreaProvider>
			</NativeBaseProvider>
          </ThemeProvider>
		);
	}
}
