export const schema = gql`
  type Session {
    id: String!
    customerId: String
    customerEmail: String
    customerName: String
    customerSignedUp: Boolean
  }

  enum Mode {
    payment
    subscription
  }

  input ProductInput {
    id: ID!
    quantity: Int!
  }

  type Query {
    getSession(id: ID!): Session! @skipAuth
  }

  type Mutation {
    # In GraphQL, we can't reuse types as mutation inputs
    # (otherwise we'd just type "cart" as "[Product!]!")
    checkout(mode: Mode!, cart: [ProductInput!]!, customerId: String): Session!
      @skipAuth
  }
`
