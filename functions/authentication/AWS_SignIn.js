import * as AWS from "aws-sdk/global";
import { storeObj } from "../../data/localStorage";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export const AWS_SignIn = ({ email, password }) =>
	new Promise((res, rej) => {
		console.log("attempting sign in EMAIL:", email, "PASSWORD", password);

		var authenticationData = {
			Username: email,
			Password: password,
		};
		var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
			authenticationData
		);
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
		cognitoUser.authenticateUser(authenticationDetails, {
			onSuccess: function (result) {
				var accessToken = result.getAccessToken().getJwtToken();

				//POTENTIAL: Region needs to be set if not already set previously elsewhere.
				AWS.config.region = "us-east-1";

				AWS.config.credentials = new AWS.CognitoIdentityCredentials({
					IdentityPoolId: "us-east-1:7752578d-721c-4b5f-b649-589b9b42af4a",
					// your identity pool id here
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

				res(result.idToken.payload); // resolves the promise
				// useredux to send back data like error sign in
			},

			onFailure: function (err) {
				rej(err.message); // rejects the promise
			},
		});
		return res;
	});

export default AWS_SignIn;

// import * as AWS from "aws-sdk/global";
// import { storeObj } from "../../data/localStorage";

// var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

// export const AWS_SignIn = ({ email, password }) => {
// 	console.log("attempting sign in EMAIL:", email, "PASSWORD", password);

// 	var authenticationData = {
// 		Username: email,
// 		Password: password,
// 	};
// 	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
// 		authenticationData
// 	);
// 	var poolData = {
// 		UserPoolId: "us-east-1_EdEM6OA8K", // Your user pool id here
// 		ClientId: "68jfls6f8j10hqqqkpf1t33aj4", // Your client id here
// 	};
// 	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
// 	var userData = {
// 		Username: email,
// 		Pool: userPool,
// 	};
// 	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
// 	cognitoUser.authenticateUser(authenticationDetails, {
// 		onSuccess: function (result) {
// 			var accessToken = result.getAccessToken().getJwtToken();

// 			//POTENTIAL: Region needs to be set if not already set previously elsewhere.
// 			AWS.config.region = "us-east-1";

// 			AWS.config.credentials = new AWS.CognitoIdentityCredentials({
// 				IdentityPoolId: "us-east-1:7752578d-721c-4b5f-b649-589b9b42af4a",
// 				// your identity pool id here
// 				Logins: {
// 					// Change the key below according to the specific region your user pool is in.
// 					"cognito-idp.us-east-1.amazonaws.com/us-east-1_EdEM6OA8K": result
// 						.getIdToken()
// 						.getJwtToken(),
// 				},
// 			});

// 			//refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
// 			AWS.config.credentials.refresh((error) => {
// 				if (error) {
// 					console.error(error);
// 				} else {
// 					// Instantiate aws sdk service objects now that the credentials have been updated.
// 					// example: var s3 = new AWS.S3();
// 					console.log("Successfully logged!");
// 				}
// 			});
// 			console.log("RES", result.idToken.payload);
// 			storeObj({ key: "USER_LOCAL", value: result.idToken.payload });
// 			// useredux to send back data like error sign in
// 		},

// 		onFailure: function (err) {
// 			alert(err.message || JSON.stringify(err));
// 			if (err == "UserNotConfirmedException: User is not confirmed.") {
// 				console.log("user not confimed mate");
// 			}
// 		},
// 	});
// };

// export default AWS_SignIn;
