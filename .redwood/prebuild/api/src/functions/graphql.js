import { URLTypeDefinition, URLResolver } from 'graphql-scalars';
import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_checkouts_sdl from "../graphql/checkouts.sdl";
sdls.checkouts_sdl = sdls_checkouts_sdl;
import * as sdls_portal_sdl from "../graphql/portal.sdl";
sdls.portal_sdl = sdls_portal_sdl;
import * as sdls_products_sdl from "../graphql/products.sdl";
sdls.products_sdl = sdls_products_sdl;
import * as sdls_users_sdl from "../graphql/users.sdl";
sdls.users_sdl = sdls_users_sdl;
let services = {};
import * as services_checkouts_checkouts from "../services/checkouts/checkouts";
services.checkouts_checkouts = services_checkouts_checkouts;
import * as services_portal_portal from "../services/portal/portal";
services.portal_portal = services_portal_portal;
import * as services_products_products from "../services/products/products";
services.products_products = services_products_products;
import * as services_users_users from "../services/users/users";
services.users_users = services_users_users;
import { getCurrentUser } from "../lib/auth";
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  getCurrentUser,
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  schemaOptions: {
    typeDefs: [URLTypeDefinition],
    resolvers: {
      URL: URLResolver
    }
  },
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVUkxUeXBlRGVmaW5pdGlvbiIsIlVSTFJlc29sdmVyIiwiY3JlYXRlR3JhcGhRTEhhbmRsZXIiLCJnZXRDdXJyZW50VXNlciIsImRiIiwibG9nZ2VyIiwiaGFuZGxlciIsImxvZ2dlckNvbmZpZyIsIm9wdGlvbnMiLCJkaXJlY3RpdmVzIiwic2RscyIsInNlcnZpY2VzIiwic2NoZW1hT3B0aW9ucyIsInR5cGVEZWZzIiwicmVzb2x2ZXJzIiwiVVJMIiwib25FeGNlcHRpb24iLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2dyYXBocWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVVJMVHlwZURlZmluaXRpb24sIFVSTFJlc29sdmVyIH0gZnJvbSAnZ3JhcGhxbC1zY2FsYXJzJ1xuXG5pbXBvcnQgeyBjcmVhdGVHcmFwaFFMSGFuZGxlciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCBkaXJlY3RpdmVzIGZyb20gJ3NyYy9kaXJlY3RpdmVzLyoqLyoue2pzLHRzfSdcbmltcG9ydCBzZGxzIGZyb20gJ3NyYy9ncmFwaHFsLyoqLyouc2RsLntqcyx0c30nXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnc3JjL3NlcnZpY2VzLyoqLyoue2pzLHRzfSdcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICdzcmMvbGliL2F1dGgnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvbGliL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVHcmFwaFFMSGFuZGxlcih7XG4gIGdldEN1cnJlbnRVc2VyLFxuICBsb2dnZXJDb25maWc6IHsgbG9nZ2VyLCBvcHRpb25zOiB7fSB9LFxuICBkaXJlY3RpdmVzLFxuICBzZGxzLFxuICBzZXJ2aWNlcyxcbiAgc2NoZW1hT3B0aW9uczoge1xuICAgIHR5cGVEZWZzOiBbVVJMVHlwZURlZmluaXRpb25dLFxuICAgIHJlc29sdmVyczoge1xuICAgICAgVVJMOiBVUkxSZXNvbHZlcixcbiAgICB9LFxuICB9LFxuICBvbkV4Y2VwdGlvbjogKCkgPT4ge1xuICAgIC8vIERpc2Nvbm5lY3QgZnJvbSB5b3VyIGRhdGFiYXNlIHdpdGggYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICBkYi4kZGlzY29ubmVjdCgpXG4gIH0sXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxpQkFBaUIsRUFBRUMsV0FBVyxRQUFRLGlCQUFpQjtBQUVoRSxTQUFTQyxvQkFBb0IsUUFBUSwyQkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWhFLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsRUFBRTtBQUNYLFNBQVNDLE1BQU07QUFFZixPQUFPLE1BQU1DLE9BQU8sR0FBR0osb0JBQW9CLENBQUM7RUFDMUNDLGNBQWM7RUFDZEksWUFBWSxFQUFFO0lBQUVGLE1BQU07SUFBRUcsT0FBTyxFQUFFLENBQUM7RUFBRSxDQUFDO0VBQ3JDQyxVQUFVO0VBQ1ZDLElBQUk7RUFDSkMsUUFBUTtFQUNSQyxhQUFhLEVBQUU7SUFDYkMsUUFBUSxFQUFFLENBQUNiLGlCQUFpQixDQUFDO0lBQzdCYyxTQUFTLEVBQUU7TUFDVEMsR0FBRyxFQUFFZDtJQUNQO0VBQ0YsQ0FBQztFQUNEZSxXQUFXLEVBQUUsTUFBTTtJQUNqQjtJQUNBWixFQUFFLENBQUNhLFdBQVcsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQyJ9