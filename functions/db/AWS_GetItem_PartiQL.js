// Import required AWS SDK clients and commands for Node.js.
import { ExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient";

const tableName = process.argv[2];
const movieTitle1 = process.argv[3];

export const run = async (tableName, movieTitle1) => {
	const params = {
		Statement: "SELECT * FROM " + tableName + " where title=?",
		Parameters: [{ S: movieTitle1 }],
	};
	try {
		const data = await ddbDocClient.send(new ExecuteStatementCommand(params));
		for (let i = 0; i < data.Items.length; i++) {
			console.log(
				"Success. The query return the following data. Item " + i,
				data.Items[i].year,
				data.Items[i].title,
				data.Items[i].info
			);
		}
		return "Run successfully"; // For unit tests.
	} catch (err) {
		console.error(err);
	}
};
run(tableName, movieTitle1);
