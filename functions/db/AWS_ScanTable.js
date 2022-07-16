import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js.js";

// Set the parameters.
export const params = {
	// Specify which items in the results are returned.
	FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",
	// Define the expression attribute value, which are substitutes for the values you want to compare.
	ExpressionAttributeValues: {
		":topic": { S: "SubTitle2" },
		":s": { N: "1" },
		":e": { N: "2" },
	},
	// Set the projection expression, which the the attributes that you want.
	ProjectionExpression: "Season, Episode, Title, Subtitle",
	TableName: "EPISODES_TABLE",
};

export const run = async () => {
	try {
		const data = await ddbClient.send(new ScanCommand(params));
		return data;
		data.Items.forEach(function (element, index, array) {
			console.log(element.Title.S + " (" + element.Subtitle.S + ")");
		});
	} catch (err) {
		console.log("Error", err);
	}
};
run();
