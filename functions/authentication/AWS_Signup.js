import React, { useState, useEffect } from "react";
import { storeObj } from "../../data/localStorage";
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export default function AWS_SignUp({
	email,
	phoneNumber,
	password,
	preferredUsername,
	name,
}) {
	try {
		var poolData = {
			UserPoolId: "us-east-1_EdEM6OA8K", // Your user pool id here
			ClientId: "68jfls6f8j10hqqqkpf1t33aj4", // Your client id here
		};
		var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

		var attributeList = [];

		var dataEmail = {
			Name: "email",
			Value: email,
		};

		var dataPreferredUsername = {
			Name: "preferred_username",
			Value: preferredUsername,
		};

		var dataPhoneNumber = {
			Name: "phone_number",
			Value: phoneNumber,
		};

		var dataName = {
			Name: "name",
			Value: name,
		};
		var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
			dataEmail
		);
		var attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(
			dataName
		);

		var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
			dataPhoneNumber
		);
		var attributePreferredUsername =
			new AmazonCognitoIdentity.CognitoUserAttribute(dataPreferredUsername);

		attributeList.push(attributeEmail);
		attributeList.push(attributeName);
		attributeList.push(attributePhoneNumber);
		attributeList.push(attributePreferredUsername);

		userPool.signUp(
			email,
			password,
			attributeList,
			null,
			function (err, result) {
				if (err) {
					alert(err.message || JSON.stringify(err));
					return;
				} else {
					var cognitoUser = result.user;

					console.log(cognitoUser.username);
					console.log("user name is " + cognitoUser.getUsername());
					storeObj({ key: "USER_LOCAL", value: cognitoUser });
				}
			}
		);
	} catch (e) {
		// We might want to provide this error information to an error reporting service
		console.warn(e);
	} finally {
	}
}
