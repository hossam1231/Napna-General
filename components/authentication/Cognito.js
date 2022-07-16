import * as AWS from "aws-sdk/global";
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from "amazon-cognito-identity-js";
import { AWSPoolId, AWSCliId } from "../../constants/Amazon";

var poolData = {
	UserPoolId: AWSPoolId, // Your user pool id here
	ClientId: AWSCliId, // Your client id here
};

export const signUp = ({ phoneNumber, email, username, password }) => {
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var attributeList = [];

	var dataEmail = {
		Name: "email",
		Value: email,
	};

	var dataPhoneNumber = {
		Name: "phone_number",
		Value: phoneNumber,
	};
	var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
		dataEmail
	);
	var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
		dataPhoneNumber
	);

	attributeList.push(attributeEmail);
	attributeList.push(attributePhoneNumber);

	userPool.signUp(
		username,
		password,
		attributeList,
		null,
		function (err, result) {
			if (err) {
				alert(err.message || JSON.stringify(err));
				return;
			}
			var cognitoUser = result.user;
			console.log("user name is " + cognitoUser.getUsername());
		}
	);
};

export const confirmUser = ({ username, code }) => {
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: username,
		Pool: userPool,
	};

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.confirmRegistration(code, true, function (err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		console.log("call result: " + result);
	});
};

export const resendConfirmation = ({ username }) => {
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: username,
		Pool: userPool,
	};

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

	cognitoUser.resendConfirmationCode(function (err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		console.log("call result: " + result);
	});
};

export const signIn = ({ username, password }) => {
	var authenticationData = {
		Username: username,
		Password: password,
	};
	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
		authenticationData
	);

	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: username,
		Pool: userPool,
	};
	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.authenticateUser(authenticationDetails, {
		onSuccess: function (result) {
			var accessToken = result.getAccessToken().getJwtToken();

			//POTENTIAL: Region needs to be set if not already set previously elsewhere.
			AWS.config.region = "us-east-1";

			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
				IdentityPoolId: "us-east-1:35288a0f-aa7f-4e85-b59e-12aa9d63692c", // your identity pool id here
				Logins: {
					// Change the key below according to the specific region your user pool is in.
					"cognito-idp.us-east-1.amazonaws.com/us-east-1_EdEM6OA8K": result
						.getIdToken()
						.getJwtToken(),
				},
			});

			//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
			AWS.config.credentials.refresh((error) => {
				if (error) {
					console.error(error);
				} else {
					// Instantiate aws sdk service objects now that the credentials have been updated.
					// example: var s3 = new AWS.S3();
					console.log("Successfully logged!");
				}
			});
		},

		onFailure: function (err) {
			alert(err.message || JSON.stringify(err));
		},
	});
};

export const signOut = () => {
	cognitoUser.signOut();
};
