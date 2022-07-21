export const schema = gql`
  type Package {
    id: String!
    name: String!
    description: String!
    price: Int!
  }

  type Query {
    packages: [Package!]! @requireAuth
    package(id: String!): Package @requireAuth
  }

  input CreatePackageInput {
    name: String!
    description: String!
    price: Int!
  }

  input UpdatePackageInput {
    name: String
    description: String
    price: Int
  }

  type Mutation {
    createPackage(input: CreatePackageInput!): Package! @requireAuth
    updatePackage(id: String!, input: UpdatePackageInput!): Package!
      @requireAuth
    deletePackage(id: String!): Package! @requireAuth
  }
`
