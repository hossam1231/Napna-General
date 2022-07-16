import React from "react";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export const AWS_ResendConfirmation = ({ email }) => {
	var poolData = {
		UserPoolId: "us-east-1_EdEM6OA8K", // Your user pool id here
		ClientId: "68jfls6f8j10hqqqkpf1t33aj4", // Your client id here
	};

	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var userData = {
		Username: email,
		Pool: userPool,
	};

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

	cognitoUser.resendConfirmationCode(function (err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		console.log("call result: ", result);
	});
};

export default AWS_ResendConfirmation;
