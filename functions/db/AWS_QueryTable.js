import { QueryCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js.js";

// Set the parameters
export const params = {
	KeyConditionExpression: "Season = :s and Episode > :e",
	FilterExpression: "contains (Subtitle, :topic)",
	ExpressionAttributeValues: {
		":s": { N: "1" },
		":e": { N: "2" },
		":topic": { S: "SubTitle" },
	},
	ProjectionExpression: "Episode, Title, Subtitle",
	TableName: "EPISODES_TABLE",
};

export const run = async () => {
	try {
		const data = await ddbClient.send(new QueryCommand(params));
		return data;
		data.Items.forEach(function (element, index, array) {
			console.log(element.Title.S + " (" + element.Subtitle.S + ")");
		});
	} catch (err) {
		console.error(err);
	}
};
run();
