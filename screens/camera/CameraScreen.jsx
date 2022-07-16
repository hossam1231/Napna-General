// import { Button } from "native-base";
// import React, { useState, useEffect } from "react";
// import { predict } from "../../components/camera/Index";
// import { Text, View, StyleSheet } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";
// import { Box, ZStack } from "native-base";

// export default function Camera() {
// 	const [hasPermission, setHasPermission] = useState(null);
// 	const [scanned, setScanned] = useState(false);

// 	useEffect(() => {
// 		(async () => {
// 			const { status } = await BarCodeScanner.requestPermissionsAsync();
// 			setHasPermission(status === "granted");
// 		})();
// 	}, []);

// 	useEffect(() => {
// 		predict();
// 	}, []);

// 	const handleBarCodeScanned = ({ type, data }) => {
// 		setScanned(true);
// 		alert(`Bar code with type ${type} and data ${data} has been scanned!`);
// 	};

// 	if (hasPermission === null) {
// 		return <Text>Requesting for camera permission</Text>;
// 	}
// 	if (hasPermission === false) {
// 		return <Text>No access to camera</Text>;
// 	}

// 	return (
// 		<Box flex="1">
// 			<BarCodeScanner
// 				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
// 				style={StyleSheet.absoluteFillObject}
// 			/>
// 			{scanned && (
// 				<Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
// 			)}
// 		</Box>
// 	);
// }

// import { Button } from "native-base";
// import React from "react";

// const Camera = () => {
// 	return <Button onPress={() => predict()}>HEEE</Button>;
// };

// export default Camera;

import React from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import { Text } from "native-base";

const BACKEND_TO_USE = "rn-webgl";
// Get reference to bundled model assets
const modelJson = require("../../models/model.json");
const modelWeights = require("../../models/weights.bin");

export const Camera = async () => {
	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		// set backend
		await tf.setBackend(BACKEND_TO_USE);
		// Wait for tf to be ready.
		await tf.ready();
		// Signal to the app that tensorflow.js can now be used.
	};

	// Use the bundleResorceIO IOHandler to load the model
	const model = await tf.loadLayersModel(
		bundleResourceIO(modelJson, modelWeights)
	);

	const imageUri = "http://image-uri-here.example.com/image.jpg";
	const response = await fetch(imageUri, {}, { isBinary: true });
	const imageDataArrayBuffer = await response.arrayBuffer();
	const imageData = new Uint8Array(imageDataArrayBuffer);
	const imageTensor = decodeJpeg(imageData);

	const prediction = (await model.predict(imageTensor))[0];

	return (
		<>
			<Text>{prediction}</Text>
		</>
	);
};

export default Camera;
