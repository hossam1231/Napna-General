// react
import React from "react";

// redux
import { Provider as ReduxProvider } from "react-redux";
import { Store } from "./services/redux/store";

// nativebase
import { NativeBaseProvider } from "native-base";

// react native
import { SafeAreaProvider } from "react-native-safe-area-context";

// screens
import { LoadingScreen } from "./screens/loading/LoadingScreen";

const App = () => {
	return (
		<ReduxProvider store={Store}>
			{/* <PersistGate loading={false} persistor={persister}> */}
			<NativeBaseProvider>
				<SafeAreaProvider>
					<LoadingScreen
						spinnerColor={"black"}
						textColor={"black"}
						accessibilityLabel={"loading cache"}
					/>
				</SafeAreaProvider>
			</NativeBaseProvider>
		</ReduxProvider>
	);
};

export default App;
