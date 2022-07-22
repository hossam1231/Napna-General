export const schema = gql`
  type Product {
    id: String!
    name: String!
    description: String!
    price: Int!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: String!): Product @requireAuth
  }

  input CreateProductInput {
    name: String!
    description: String!
    price: Int!
  }

  input UpdateProductInput {
    name: String
    description: String
    price: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: String!, input: UpdateProductInput!): Product!
      @requireAuth
    deleteProduct(id: String!): Product! @requireAuth
  }
`
