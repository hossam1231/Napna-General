export const schema = gql`
  type SubscriptionPackage {
    id: String!
    name: String!
    description: String!
    price: Int!
  }

  type Query {
    subscriptionPackages: [SubscriptionPackage!]! @requireAuth
    subscriptionPackage(id: String!): SubscriptionPackage @requireAuth
  }

  input CreateSubscriptionPackageInput {
    name: String!
    description: String!
    price: Int!
  }

  input UpdateSubscriptionPackageInput {
    name: String
    description: String
    price: Int
  }

  type Mutation {
    createSubscriptionPackage(
      input: CreateSubscriptionPackageInput!
    ): SubscriptionPackage! @requireAuth
    updateSubscriptionPackage(
      id: String!
      input: UpdateSubscriptionPackageInput!
    ): SubscriptionPackage! @requireAuth
    deleteSubscriptionPackage(id: String!): SubscriptionPackage! @requireAuth
  }
`
