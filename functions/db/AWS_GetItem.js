import { GetCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "./AWS_DynamoDbDocumentClient";

// Set the parameters.
export const params = {
	TableName: "TABLE_NAME",
	Key: {
		primaryKey: "VALUE_1",
		sortKey: "VALUE_2",
	},
};

export const getItem = async ({ params }) => {
	try {
		const data = await ddbDocClient.send(new GetCommand(params));
		console.log("Success :", data.Item);
	} catch (err) {
		console.log("Error", err);
	}
};
getItem();
