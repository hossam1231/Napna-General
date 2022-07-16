import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_contacts_sdl from "../graphql/contacts.sdl";
sdls.contacts_sdl = sdls_contacts_sdl;
import * as sdls_posts_sdl from "../graphql/posts.sdl";
sdls.posts_sdl = sdls_posts_sdl;
import * as sdls_users_sdl from "../graphql/users.sdl";
sdls.users_sdl = sdls_users_sdl;
let services = {};
import * as services_contacts_contacts from "../services/contacts/contacts";
services.contacts_contacts = services_contacts_contacts;
import * as services_posts_posts from "../services/posts/posts";
services.posts_posts = services_posts_posts;
import * as services_users_users from "../services/users/users";
services.users_users = services_users_users;
import { getCurrentUser } from "../lib/auth";
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: {}
  },
  getCurrentUser,
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2dyYXBocWwuanMiXSwibmFtZXMiOlsiY3JlYXRlR3JhcGhRTEhhbmRsZXIiLCJnZXRDdXJyZW50VXNlciIsImRiIiwibG9nZ2VyIiwiaGFuZGxlciIsImxvZ2dlckNvbmZpZyIsIm9wdGlvbnMiLCJkaXJlY3RpdmVzIiwic2RscyIsInNlcnZpY2VzIiwib25FeGNlcHRpb24iLCIkZGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0Esb0JBQVQsUUFBcUMsMkJBQXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLFNBQVNDLGNBQVQ7QUFDQSxTQUFTQyxFQUFUO0FBQ0EsU0FBU0MsTUFBVDtBQUVBLE9BQU8sTUFBTUMsT0FBTyxHQUFHSixvQkFBb0IsQ0FBQztBQUMxQ0ssRUFBQUEsWUFBWSxFQUFFO0FBQUVGLElBQUFBLE1BQUY7QUFBVUcsSUFBQUEsT0FBTyxFQUFFO0FBQW5CLEdBRDRCO0FBRTFDTCxFQUFBQSxjQUYwQztBQUcxQ00sRUFBQUEsVUFIMEM7QUFJMUNDLEVBQUFBLElBSjBDO0FBSzFDQyxFQUFBQSxRQUwwQztBQU8xQ0MsRUFBQUEsV0FBVyxFQUFFLE1BQU07QUFDakI7QUFDQVIsSUFBQUEsRUFBRSxDQUFDUyxXQUFIO0FBQ0Q7QUFWeUMsQ0FBRCxDQUFwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdyYXBoUUxIYW5kbGVyIH0gZnJvbSAnQHJlZHdvb2Rqcy9ncmFwaHFsLXNlcnZlcidcblxuaW1wb3J0IGRpcmVjdGl2ZXMgZnJvbSAnc3JjL2RpcmVjdGl2ZXMvKiovKi57anMsdHN9J1xuaW1wb3J0IHNkbHMgZnJvbSAnc3JjL2dyYXBocWwvKiovKi5zZGwue2pzLHRzfSdcbmltcG9ydCBzZXJ2aWNlcyBmcm9tICdzcmMvc2VydmljZXMvKiovKi57anMsdHN9J1xuXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gJ3NyYy9saWIvYXV0aCdcbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy9saWIvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZUdyYXBoUUxIYW5kbGVyKHtcbiAgbG9nZ2VyQ29uZmlnOiB7IGxvZ2dlciwgb3B0aW9uczoge30gfSxcbiAgZ2V0Q3VycmVudFVzZXIsXG4gIGRpcmVjdGl2ZXMsXG4gIHNkbHMsXG4gIHNlcnZpY2VzLFxuXG4gIG9uRXhjZXB0aW9uOiAoKSA9PiB7XG4gICAgLy8gRGlzY29ubmVjdCBmcm9tIHlvdXIgZGF0YWJhc2Ugd2l0aCBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgIGRiLiRkaXNjb25uZWN0KClcbiAgfSxcbn0pXG4iXX0=