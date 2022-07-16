// Import required AWS SDK clients and commands for Node.js.
import { BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { ddbDocClient } from "../libs/ddbDocClient.js.js";

const tableName = process.argv[2];
const movieYear1 = process.argv[3];
const movieTitle1 = process.argv[4];
const movieYear2 = process.argv[5];
const movieTitle2 = process.argv[6];

export const run = async (
	tableName,
	movieYear1,
	movieTitle1,
	movieYear2,
	movieTitle2
) => {
	const params = {
		Statements: [
			{
				Statement: "SELECT * FROM " + tableName + " where title=? and year=?",
				Parameters: [{ S: movieTitle1 }, { N: movieYear1 }],
			},
			{
				Statement: "SELECT * FROM " + tableName + " where title=? and year=?",
				Parameters: [{ S: movieTitle2 }, { N: movieYear2 }],
			},
		],
	};
	try {
		const data = await ddbDocClient.send(
			new BatchExecuteStatementCommand(params)
		);
		for (let i = 0; i < data.Responses.length; i++) {
			console.log(data.Responses[i].Item.year);
			console.log(data.Responses[i].Item.title);
		}
		return "Run successfully"; // For unit tests.
	} catch (err) {
		console.error(err);
	}
};
run(tableName, movieYear1, movieTitle1, movieYear2, movieTitle2);
