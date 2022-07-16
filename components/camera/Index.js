import React, { useState, useEffect } from "../../screens/node_modules/@types/react";
import * as tf from "@tensorflow/tfjs";
import {
	fetch,
	decodeJpeg,
	bundleResourceIO,
} from "@tensorflow/tfjs-react-native";

// Get reference to bundled model assets
const modelJson = require("../../*my-app/models/model.json");
const modelWeights = require("../../models/weights.bin");

const image = require("./Gravy.jpeg");

export const predict = async () => {
	let prediction;
	try {
		// Calling setBackend() method
		tf.setBackend("rn-webgl");

		// Calling ready() method and

		// Printing output
		await tf.ready().then(() => {
			console.log(tf.backend().blockSize);
		});
		// Use the bundleResorceIO IOHandler to load the model
		const model = await tf.loadLayersModel(
			bundleResourceIO(modelJson, modelWeights)
		);

		// Load an image from the web
		// const uri =
		// 	"https://digitalcontent.api.tesco.com/v2/media/ghs/565cf450-2d73-4ef1-b42c-7dc4d00290eb/75bd026f-1e02-43de-a53f-47abee36038c_1298704434.jpeg?h=540&w=540";
		// const response = await fetch(uri, {}, { isBinary: true });
		// const imageData = await response.arrayBuffer();
		// const imageTensor = decodeJpeg(imageData);
		// const imageTensor = decodeJpeg(image);

		// Load an image as a Uint8Array
		const imageUri = "http://image-uri-here.example.com/image.jpg";
		const response = await fetch(imageUri, {}, { isBinary: true });
		const imageDataArrayBuffer = await response.arrayBuffer();
		const imageData = new Uint8Array(imageDataArrayBuffer);
		const imageTensor = decodeJpeg(imageData);

		prediction = (await model.predict(imageTensor))[0];
	} catch (error) {
		console.log(error);
	}

	// Use prediction in app
	console.log(prediction);
};
