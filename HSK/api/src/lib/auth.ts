import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'
import { db } from './db'

// Session Secret
// After the initial setup command, which installed dbAuth, you may have noticed that an edit was made to the .env file in the root of your project. The setup script appended a new ENV var called SESSION_SECRET along with a big random string of numbers and letters. This is the encryption key for the cookies that are stored in the user's browser when they log in. This secret should never be shared, never checked into your repo, and should be re-generated for each environment you deploy to.

// You can generate a new value with the yarn rw g secret command. It only outputs it to the terminal, you'll need to copy/paste to your .env file. Note that if you change this secret in a production environment, all users will be logged out on their next request because the cookie they currently have cannot be decrypted with the new key! They'll need to log in again to a new cookie encrypted with the new key.

// Wrapping Up
// Believe it or not, that's pretty much it for authentication! You can use the combination of @requireAuth and @skipAuth directives to lock down access to GraphQL query/mutations, and the <Private> component to restrict access to entire pages of your app. If you only want to restrict access to certain components, or certain parts of a component, you can always get isAuthenticated from the useAuth() hook and then render one thing or another.

// Head over to the Redwood docs to read more about self-hosted authentication and third-party authentication.

export const getCurrentUser = async (session) => {
  return await db.user.findUnique({
    where: { id: session.id },
    select: { id: true, email: true },
  })
}

export const isAuthenticated = (): boolean => {
  return !!context.currentUser
}

type AllowedRoles = string | string[] | undefined

export const hasRole = ({ roles }): boolean => {
  if (!isAuthenticated()) {
    return false
  }

  const currentUserRoles = context.currentUser?.roles

  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles
    } else if (Array.isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some((allowedRole) => roles === allowedRole)
    }
  }

  if (Array.isArray(roles)) {
    if (Array.isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some((allowedRole) =>
        roles.includes(allowedRole)
      )
    } else if (typeof context.currentUser.roles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return roles.some(
        (allowedRole) => context.currentUser?.roles === allowedRole
      )
    }
  }

  // roles not found
  return false
}

export const requireAuth = ({ roles }: { roles?: AllowedRoles } = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
