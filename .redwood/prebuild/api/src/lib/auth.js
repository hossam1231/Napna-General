import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js/instance/some";
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
      id: true,
      email: true
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
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: AllowedRoles - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */

export const hasRole = roles => {
  if (!isAuthenticated()) {
    return false;
  }

  const currentUserRoles = context.currentUser?.roles;

  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles;
    } else if (_Array$isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => roles === allowedRole);
    }
  }

  if (_Array$isArray(roles)) {
    if (_Array$isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => _includesInstanceProperty(roles).call(roles, allowedRole));
    } else if (typeof context.currentUser.roles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return _someInstanceProperty(roles).call(roles, allowedRole => context.currentUser?.roles === allowedRole);
    }
  } // roles not found


  return false;
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

  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvbGliL2F1dGguanMiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb25FcnJvciIsIkZvcmJpZGRlbkVycm9yIiwiY29udGV4dCIsImRiIiwiZ2V0Q3VycmVudFVzZXIiLCJzZXNzaW9uIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwic2VsZWN0IiwiZW1haWwiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjdXJyZW50VXNlciIsImhhc1JvbGUiLCJyb2xlcyIsImN1cnJlbnRVc2VyUm9sZXMiLCJzb21lIiwiYWxsb3dlZFJvbGUiLCJyZXF1aXJlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBU0EsbUJBQVQsRUFBOEJDLGNBQTlCLEVBaUNXQyxPQWpDWCxRQUFvRCwyQkFBcEQ7QUFDQSxTQUFTQyxFQUFULFFBQW1CLE1BQW5CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxPQUFPLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQy9DLFNBQU8sTUFBTUYsRUFBRSxDQUFDRyxJQUFILENBQVFDLFVBQVIsQ0FBbUI7QUFDOUJDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxFQUFFLEVBQUVKLE9BQU8sQ0FBQ0k7QUFBZCxLQUR1QjtBQUU5QkMsSUFBQUEsTUFBTSxFQUFFO0FBQUVELE1BQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVlFLE1BQUFBLEtBQUssRUFBRTtBQUFuQjtBQUZzQixHQUFuQixDQUFiO0FBSUQsQ0FMTTtBQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsT0FBTyxNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUNuQyxTQUFPLENBQUMsQ0FBQ1YsT0FBTyxDQUFDVyxXQUFqQjtBQUNELENBRk07QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE9BQU8sTUFBTUMsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDaEMsTUFBSSxDQUFDSCxlQUFlLEVBQXBCLEVBQXdCO0FBQ3RCLFdBQU8sS0FBUDtBQUNEOztBQUVELFFBQU1JLGdCQUFnQixHQUFHZCxPQUFPLENBQUNXLFdBQVIsRUFBcUJFLEtBQTlDOztBQUVBLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixRQUFJLE9BQU9DLGdCQUFQLEtBQTRCLFFBQWhDLEVBQTBDO0FBQ3hDO0FBQ0EsYUFBT0EsZ0JBQWdCLEtBQUtELEtBQTVCO0FBQ0QsS0FIRCxNQUdPLElBQUksZUFBY0MsZ0JBQWQsQ0FBSixFQUFxQztBQUMxQztBQUNBLGFBQU9BLGdCQUFnQixFQUFFQyxJQUFsQixDQUF3QkMsV0FBRCxJQUFpQkgsS0FBSyxLQUFLRyxXQUFsRCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJLGVBQWNILEtBQWQsQ0FBSixFQUEwQjtBQUN4QixRQUFJLGVBQWNDLGdCQUFkLENBQUosRUFBcUM7QUFDbkM7QUFDQSxhQUFPQSxnQkFBZ0IsRUFBRUMsSUFBbEIsQ0FBd0JDLFdBQUQsSUFDNUIsMEJBQUFILEtBQUssTUFBTCxDQUFBQSxLQUFLLEVBQVVHLFdBQVYsQ0FEQSxDQUFQO0FBR0QsS0FMRCxNQUtPLElBQUksT0FBT2hCLE9BQU8sQ0FBQ1csV0FBUixDQUFvQkUsS0FBM0IsS0FBcUMsUUFBekMsRUFBbUQ7QUFDeEQ7QUFDQSxhQUFPLHNCQUFBQSxLQUFLLE1BQUwsQ0FBQUEsS0FBSyxFQUNURyxXQUFELElBQWlCaEIsT0FBTyxDQUFDVyxXQUFSLEVBQXFCRSxLQUFyQixLQUErQkcsV0FEdEMsQ0FBWjtBQUdEO0FBQ0YsR0E3QitCLENBK0JoQzs7O0FBQ0EsU0FBTyxLQUFQO0FBQ0QsQ0FqQ007QUFtQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxPQUFPLE1BQU1DLFdBQVcsR0FBRyxDQUFDO0FBQUVKLEVBQUFBO0FBQUYsQ0FBRCxLQUFlO0FBQ3hDLE1BQUksQ0FBQ0gsZUFBZSxFQUFwQixFQUF3QjtBQUN0QixVQUFNLElBQUlaLG1CQUFKLENBQXdCLHVDQUF4QixDQUFOO0FBQ0Q7O0FBRUQsTUFBSWUsS0FBSyxJQUFJLENBQUNELE9BQU8sQ0FBQ0MsS0FBRCxDQUFyQixFQUE4QjtBQUM1QixVQUFNLElBQUlkLGNBQUosQ0FBbUIsbUNBQW5CLENBQU47QUFDRDtBQUNGLENBUk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoZW50aWNhdGlvbkVycm9yLCBGb3JiaWRkZW5FcnJvciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZGInXG5cbi8qKlxuICogVGhlIHNlc3Npb24gb2JqZWN0IHNlbnQgaW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGdldEN1cnJlbnRVc2VyKCkgd2lsbFxuICogaGF2ZSBhIHNpbmdsZSBrZXkgYGlkYCBjb250YWluaW5nIHRoZSB1bmlxdWUgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gKiAod2hhdGV2ZXIgZmllbGQgeW91IHNldCBhcyBgYXV0aEZpZWxkcy5pZGAgaW4geW91ciBhdXRoIGZ1bmN0aW9uIGNvbmZpZykuXG4gKiBZb3UnbGwgbmVlZCB0byB1cGRhdGUgdGhlIGNhbGwgdG8gYGRiYCBiZWxvdyBpZiB5b3UgdXNlIGEgZGlmZmVyZW50IG1vZGVsXG4gKiBuYW1lIG9yIHVuaXF1ZSBmaWVsZCBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIHJldHVybiBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi5pZCB9IH0pXG4gKiAgICAgICAgICAgICAgICAgICDilIDilIDilIDilKzilIDilIDilIAgICAgICAgICAgICAgICAgICAgICAgIOKUgOKUgOKUrOKUgOKUgFxuICogICAgICBtb2RlbCBhY2Nlc3NvciDilIDilJggICAgICB1bmlxdWUgaWQgZmllbGQgbmFtZSDilIDilJhcbiAqXG4gKiAhISBCRVdBUkUgISEgQW55dGhpbmcgcmV0dXJuZWQgZnJvbSB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIHRvIHRoZVxuICogY2xpZW50LS1pdCBiZWNvbWVzIHRoZSBjb250ZW50IG9mIGBjdXJyZW50VXNlcmAgb24gdGhlIHdlYiBzaWRlIChhcyB3ZWxsIGFzXG4gKiBgY29udGV4dC5jdXJyZW50VXNlcmAgb24gdGhlIGFwaSBzaWRlKS4gWW91IHNob3VsZCBjYXJlZnVsbHkgYWRkIGFkZGl0aW9uYWxcbiAqIGZpZWxkcyB0byB0aGUgYHNlbGVjdGAgb2JqZWN0IGJlbG93IG9uY2UgeW91J3ZlIGRlY2lkZWQgdGhleSBhcmUgc2FmZSB0byBiZVxuICogc2VlbiBpZiBzb21lb25lIHdlcmUgdG8gb3BlbiB0aGUgV2ViIEluc3BlY3RvciBpbiB0aGVpciBicm93c2VyLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoc2Vzc2lvbikgPT4ge1xuICByZXR1cm4gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2Vzc2lvbi5pZCB9LFxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgZW1haWw6IHRydWUgfSxcbiAgfSlcbn1cblxuLyoqXG4gKiBUaGUgdXNlciBpcyBhdXRoZW50aWNhdGVkIGlmIHRoZXJlIGlzIGEgY3VycmVudFVzZXIgaW4gdGhlIGNvbnRleHRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZFxuICovXG5leHBvcnQgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xuICByZXR1cm4gISFjb250ZXh0LmN1cnJlbnRVc2VyXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkIChhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcylcbiAqXG4gKiBAcGFyYW0gcm9sZXM6IEFsbG93ZWRSb2xlcyAtIENoZWNrcyBpZiB0aGUgY3VycmVudFVzZXIgaXMgYXNzaWduZWQgb25lIG9mIHRoZXNlIHJvbGVzXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50VXNlciBpcyBsb2dnZWQgaW4gYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMsXG4gKiBvciB3aGVuIG5vIHJvbGVzIGFyZSBwcm92aWRlZCB0byBjaGVjayBhZ2FpbnN0LiBPdGhlcndpc2UgcmV0dXJucyBmYWxzZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGhhc1JvbGUgPSAocm9sZXMpID0+IHtcbiAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgY3VycmVudFVzZXJSb2xlcyA9IGNvbnRleHQuY3VycmVudFVzZXI/LnJvbGVzXG5cbiAgaWYgKHR5cGVvZiByb2xlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRVc2VyUm9sZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhIHN0cmluZywgY3VycmVudFVzZXIucm9sZXMgaXMgYSBzdHJpbmdcbiAgICAgIHJldHVybiBjdXJyZW50VXNlclJvbGVzID09PSByb2xlc1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VXNlclJvbGVzKSkge1xuICAgICAgLy8gcm9sZXMgdG8gY2hlY2sgaXMgYSBzdHJpbmcsIGN1cnJlbnRVc2VyLnJvbGVzIGlzIGFuIGFycmF5XG4gICAgICByZXR1cm4gY3VycmVudFVzZXJSb2xlcz8uc29tZSgoYWxsb3dlZFJvbGUpID0+IHJvbGVzID09PSBhbGxvd2VkUm9sZSlcbiAgICB9XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShyb2xlcykpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VXNlclJvbGVzKSkge1xuICAgICAgLy8gcm9sZXMgdG8gY2hlY2sgaXMgYW4gYXJyYXksIGN1cnJlbnRVc2VyLnJvbGVzIGlzIGFuIGFycmF5XG4gICAgICByZXR1cm4gY3VycmVudFVzZXJSb2xlcz8uc29tZSgoYWxsb3dlZFJvbGUpID0+XG4gICAgICAgIHJvbGVzLmluY2x1ZGVzKGFsbG93ZWRSb2xlKVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRleHQuY3VycmVudFVzZXIucm9sZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyByb2xlcyB0byBjaGVjayBpcyBhbiBhcnJheSwgY3VycmVudFVzZXIucm9sZXMgaXMgYSBzdHJpbmdcbiAgICAgIHJldHVybiByb2xlcy5zb21lKFxuICAgICAgICAoYWxsb3dlZFJvbGUpID0+IGNvbnRleHQuY3VycmVudFVzZXI/LnJvbGVzID09PSBhbGxvd2VkUm9sZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8vIHJvbGVzIG5vdCBmb3VuZFxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBVc2UgcmVxdWlyZUF1dGggaW4geW91ciBzZXJ2aWNlcyB0byBjaGVjayB0aGF0IGEgdXNlciBpcyBsb2dnZWQgaW4sXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBhc3NpZ25lZCBhIHJvbGUsIGFuZCBvcHRpb25hbGx5IHJhaXNlIGFuXG4gKiBlcnJvciBpZiB0aGV5J3JlIG5vdC5cbiAqXG4gKiBAcGFyYW0gcm9sZXM6IEFsbG93ZWRSb2xlcyAtIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCB0aGVzZSByb2xlcyBncmFudCBhY2Nlc3MuXG4gKlxuICogQHJldHVybnMgLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgYXV0aGVudGljYXRlZCAoYW5kIGFzc2lnbmVkIG9uZSBvZiB0aGUgZ2l2ZW4gcm9sZXMpXG4gKlxuICogQHRocm93cyB7QXV0aGVudGljYXRpb25FcnJvcn0gLSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWRcbiAqIEB0aHJvd3Mge0ZvcmJpZGRlbkVycm9yfSBJZiB0aGUgY3VycmVudFVzZXIgaXMgbm90IGFsbG93ZWQgZHVlIHRvIHJvbGUgcGVybWlzc2lvbnNcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWR3b29kanMvcmVkd29vZC90cmVlL21haW4vcGFja2FnZXMvYXV0aCBmb3IgZXhhbXBsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVpcmVBdXRoID0gKHsgcm9sZXMgfSkgPT4ge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoYXQuXCIpXG4gIH1cblxuICBpZiAocm9sZXMgJiYgIWhhc1JvbGUocm9sZXMpKSB7XG4gICAgdGhyb3cgbmV3IEZvcmJpZGRlbkVycm9yKFwiWW91IGRvbid0IGhhdmUgYWNjZXNzIHRvIGRvIHRoYXQuXCIpXG4gIH1cbn1cbiJdfQ==