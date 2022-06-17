export const schema = gql`
  type Product {
    id: Int!
    title: String!
    imageUrl: String!
    price: Int!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    title: String!
    imageUrl: String!
    price: Int!
  }

  input UpdateProductInput {
    title: String
    imageUrl: String
    price: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
