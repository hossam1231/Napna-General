import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
 var express = require('express');
 var { graphqlHTTP } = require('express-graphql');
 var { buildSchema } = require('graphql');

 // Construct a schema, using GraphQL schema language
 var schema = buildSchema(`
   type Query {
     hello: String
   }
 `);

 // The root provides a resolver function for each API endpoint
 var root = {
   hello: () => {
     return 'Hello world!';
   },
 };

 var app = express();
 app.use('/graphql', graphqlHTTP({
   schema: schema,
   rootValue: root,
   graphiql: true,
 }));
 app.listen(4000);
 console.log('Running a GraphQL API server at http://localhost:4000/graphql');
