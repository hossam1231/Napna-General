import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import { AuthenticationError, ForbiddenError, context } from '@redwoodjs/graphql-server';
import { db } from './db';

/**
 * The session object sent in as the first argument to getCurrentUser() will
 * have a single key `id` containing the unique ID of the logged in user
 * (whatever field you set as `authFields.id` in your auth function config).
 * You'll need to update the call to `db` below if you use a different model
 * name or unique field name, for example:
 *
 *   return await db.profile.findUnique({ where: { email: session.id } })
 *                   ───┬───                       ──┬──
 *      model accessor ─┘      unique id field name ─┘
 *
 * !! BEWARE !! Anything returned from this function will be available to the
 * client--it becomes the content of `currentUser` on the web side (as well as
 * `context.currentUser` on the api side). You should carefully add additional
 * fields to the `select` object below once you've decided they are safe to be
 * seen if someone were to open the Web Inspector in their browser.
 */
export const getCurrentUser = async session => {
  return await db.user.findUnique({
    where: {
      id: session.id
    },
    select: {
      id: true
    }
  });
};

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = () => {
  return !!context.currentUser;
};

/**
 * When checking role membership, roles can be a single value, a list, or none.
 * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
 */

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: AllowedRoles - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = ({
  roles
}) => {
  if (!isAuthenticated()) {
    return false;
  }
  if (roles) {
    if (_Array$isArray(roles)) {
      return context.currentUser.roles?.some(r => _includesInstanceProperty(roles).call(roles, r));
    }
    if (typeof roles === 'string') {
      return context.currentUser.roles?.includes(roles);
    }

    // roles not found
    return false;
  }
  return true;
};

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param roles: AllowedRoles - When checking role membership, these roles grant access.
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {AuthenticationError} - If the currentUser is not authenticated
 * @throws {ForbiddenError} If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = ({
  roles
}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.");
  }
  if (!hasRole({
    roles
  })) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbkVycm9yIiwiRm9yYmlkZGVuRXJyb3IiLCJjb250ZXh0IiwiZGIiLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaWQiLCJzZWxlY3QiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjdXJyZW50VXNlciIsImhhc1JvbGUiLCJyb2xlcyIsInNvbWUiLCJyIiwiaW5jbHVkZXMiLCJyZXF1aXJlQXV0aCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aGVudGljYXRpb25FcnJvciwgRm9yYmlkZGVuRXJyb3IgfSBmcm9tICdAcmVkd29vZGpzL2dyYXBocWwtc2VydmVyJ1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZGInXG5cbi8qKlxuICogVGhlIHNlc3Npb24gb2JqZWN0IHNlbnQgaW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGdldEN1cnJlbnRVc2VyKCkgd2lsbFxuICogaGF2ZSBhIHNpbmdsZSBrZXkgYGlkYCBjb250YWluaW5nIHRoZSB1bmlxdWUgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gKiAod2hhdGV2ZXIgZmllbGQgeW91IHNldCBhcyBgYXV0aEZpZWxkcy5pZGAgaW4geW91ciBhdXRoIGZ1bmN0aW9uIGNvbmZpZykuXG4gKiBZb3UnbGwgbmVlZCB0byB1cGRhdGUgdGhlIGNhbGwgdG8gYGRiYCBiZWxvdyBpZiB5b3UgdXNlIGEgZGlmZmVyZW50IG1vZGVsXG4gKiBuYW1lIG9yIHVuaXF1ZSBmaWVsZCBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIHJldHVybiBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi5pZCB9IH0pXG4gKiAgICAgICAgICAgICAgICAgICDilIDilIDilIDilKzilIDilIDilIAgICAgICAgICAgICAgICAgICAgICAgIOKUgOKUgOKUrOKUgOKUgFxuICogICAgICBtb2RlbCBhY2Nlc3NvciDilIDilJggICAgICB1bmlxdWUgaWQgZmllbGQgbmFtZSDilIDilJhcbiAqXG4gKiAhISBCRVdBUkUgISEgQW55dGhpbmcgcmV0dXJuZWQgZnJvbSB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIHRvIHRoZVxuICogY2xpZW50LS1pdCBiZWNvbWVzIHRoZSBjb250ZW50IG9mIGBjdXJyZW50VXNlcmAgb24gdGhlIHdlYiBzaWRlIChhcyB3ZWxsIGFzXG4gKiBgY29udGV4dC5jdXJyZW50VXNlcmAgb24gdGhlIGFwaSBzaWRlKS4gWW91IHNob3VsZCBjYXJlZnVsbHkgYWRkIGFkZGl0aW9uYWxcbiAqIGZpZWxkcyB0byB0aGUgYHNlbGVjdGAgb2JqZWN0IGJlbG93IG9uY2UgeW91J3ZlIGRlY2lkZWQgdGhleSBhcmUgc2FmZSB0byBiZVxuICogc2VlbiBpZiBzb21lb25lIHdlcmUgdG8gb3BlbiB0aGUgV2ViIEluc3BlY3RvciBpbiB0aGVpciBicm93c2VyLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoc2Vzc2lvbikgPT4ge1xuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi5pZCB9LFxuICAgIHNlbGVjdDoge1xuICAgICAgaWQ6IHRydWUsXG4gICAgfSxcbiAgfSlcbn1cblxuLyoqXG4gKiBUaGUgdXNlciBpcyBhdXRoZW50aWNhdGVkIGlmIHRoZXJlIGlzIGEgY3VycmVudFVzZXIgaW4gdGhlIGNvbnRleHRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZFxuICovXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xuICByZXR1cm4gISFjb250ZXh0LmN1cnJlbnRVc2VyXG59XG5cbi8qKlxuICogV2hlbiBjaGVja2luZyByb2xlIG1lbWJlcnNoaXAsIHJvbGVzIGNhbiBiZSBhIHNpbmdsZSB2YWx1ZSwgYSBsaXN0LCBvciBub25lLlxuICogWW91IGNhbiB1c2UgUHJpc21hIGVudW1zIHRvbyAoaWYgeW91J3JlIHVzaW5nIHRoZW0gZm9yIHJvbGVzKSwganVzdCBpbXBvcnQgeW91ciBlbnVtIHR5cGUgZnJvbSBgQHByaXNtYS9jbGllbnRgXG4gKi9cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGN1cnJlbnRVc2VyIGlzIGF1dGhlbnRpY2F0ZWQgKGFuZCBhc3NpZ25lZCBvbmUgb2YgdGhlIGdpdmVuIHJvbGVzKVxuICpcbiAqIEBwYXJhbSByb2xlczogQWxsb3dlZFJvbGVzIC0gQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhc3NpZ25lZCBvbmUgb2YgdGhlc2Ugcm9sZXNcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnRVc2VyIGlzIGxvZ2dlZCBpbiBhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcyxcbiAqIG9yIHdoZW4gbm8gcm9sZXMgYXJlIHByb3ZpZGVkIHRvIGNoZWNrIGFnYWluc3QuIE90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICovXG5leHBvcnQgY29uc3QgaGFzUm9sZSA9ICh7IHJvbGVzIH0pID0+IHtcbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHJvbGVzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocm9sZXMpKSB7XG4gICAgICByZXR1cm4gY29udGV4dC5jdXJyZW50VXNlci5yb2xlcz8uc29tZSgocikgPT4gcm9sZXMuaW5jbHVkZXMocikpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjb250ZXh0LmN1cnJlbnRVc2VyLnJvbGVzPy5pbmNsdWRlcyhyb2xlcylcbiAgICB9XG5cbiAgICAvLyByb2xlcyBub3QgZm91bmRcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogVXNlIHJlcXVpcmVBdXRoIGluIHlvdXIgc2VydmljZXMgdG8gY2hlY2sgdGhhdCBhIHVzZXIgaXMgbG9nZ2VkIGluLFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgYXNzaWduZWQgYSByb2xlLCBhbmQgb3B0aW9uYWxseSByYWlzZSBhblxuICogZXJyb3IgaWYgdGhleSdyZSBub3QuXG4gKlxuICogQHBhcmFtIHJvbGVzOiBBbGxvd2VkUm9sZXMgLSBXaGVuIGNoZWNraW5nIHJvbGUgbWVtYmVyc2hpcCwgdGhlc2Ugcm9sZXMgZ3JhbnQgYWNjZXNzLlxuICpcbiAqIEByZXR1cm5zIC0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIGF1dGhlbnRpY2F0ZWQgKGFuZCBhc3NpZ25lZCBvbmUgb2YgdGhlIGdpdmVuIHJvbGVzKVxuICpcbiAqIEB0aHJvd3Mge0F1dGhlbnRpY2F0aW9uRXJyb3J9IC0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkXG4gKiBAdGhyb3dzIHtGb3JiaWRkZW5FcnJvcn0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIG5vdCBhbGxvd2VkIGR1ZSB0byByb2xlIHBlcm1pc3Npb25zXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVkd29vZGpzL3JlZHdvb2QvdHJlZS9tYWluL3BhY2thZ2VzL2F1dGggZm9yIGV4YW1wbGVzXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1aXJlQXV0aCA9ICh7IHJvbGVzIH0pID0+IHtcbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIHRocm93IG5ldyBBdXRoZW50aWNhdGlvbkVycm9yKFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvbiB0byBkbyB0aGF0LlwiKVxuICB9XG5cbiAgaWYgKCFoYXNSb2xlKHsgcm9sZXMgfSkpIHtcbiAgICB0aHJvdyBuZXcgRm9yYmlkZGVuRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gZG8gdGhhdC5cIilcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLG1CQUFtQixFQUFFQyxjQUFjLEVBb0NqQ0MsT0FBTyxRQXBDa0MsMkJBQTJCO0FBRS9FLFNBQVNDLEVBQUUsUUFBUSxNQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNQyxjQUFjLEdBQUcsTUFBT0MsT0FBTyxJQUFLO0VBQy9DLE9BQU8sTUFBTUYsRUFBRSxDQUFDRyxJQUFJLENBQUNDLFVBQVUsQ0FBQztJQUM5QkMsS0FBSyxFQUFFO01BQUVDLEVBQUUsRUFBRUosT0FBTyxDQUFDSTtJQUFHLENBQUM7SUFDekJDLE1BQU0sRUFBRTtNQUNORCxFQUFFLEVBQUU7SUFDTjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBTUUsZUFBZSxHQUFHLE1BQU07RUFDbkMsT0FBTyxDQUFDLENBQUNULE9BQU8sQ0FBQ1UsV0FBVztBQUM5QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0VBQUVDO0FBQU0sQ0FBQyxLQUFLO0VBQ3BDLElBQUksQ0FBQ0gsZUFBZSxFQUFFLEVBQUU7SUFDdEIsT0FBTyxLQUFLO0VBQ2Q7RUFFQSxJQUFJRyxLQUFLLEVBQUU7SUFDVCxJQUFJLGVBQWNBLEtBQUssQ0FBQyxFQUFFO01BQ3hCLE9BQU9aLE9BQU8sQ0FBQ1UsV0FBVyxDQUFDRSxLQUFLLEVBQUVDLElBQUksQ0FBRUMsQ0FBQyxJQUFLLDBCQUFBRixLQUFLLE9BQUxBLEtBQUssRUFBVUUsQ0FBQyxDQUFDLENBQUM7SUFDbEU7SUFFQSxJQUFJLE9BQU9GLEtBQUssS0FBSyxRQUFRLEVBQUU7TUFDN0IsT0FBT1osT0FBTyxDQUFDVSxXQUFXLENBQUNFLEtBQUssRUFBRUcsUUFBUSxDQUFDSCxLQUFLLENBQUM7SUFDbkQ7O0lBRUE7SUFDQSxPQUFPLEtBQUs7RUFDZDtFQUVBLE9BQU8sSUFBSTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sTUFBTUksV0FBVyxHQUFHLENBQUM7RUFBRUo7QUFBTSxDQUFDLEtBQUs7RUFDeEMsSUFBSSxDQUFDSCxlQUFlLEVBQUUsRUFBRTtJQUN0QixNQUFNLElBQUlYLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDO0VBQ3hFO0VBRUEsSUFBSSxDQUFDYSxPQUFPLENBQUM7SUFBRUM7RUFBTSxDQUFDLENBQUMsRUFBRTtJQUN2QixNQUFNLElBQUliLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBQztFQUMvRDtBQUNGLENBQUMifQ==