export const schema = gql`
  type Product {
    id: String!
    title: String!
    price: Float!
    imageUrl: String!
    createdAt: DateTime!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: String!): Product @skipAuth
  }

  input CreateProductInput {
    title: String!
    price: Float!
    imageUrl: String!
  }

  input UpdateProductInput {
    title: String
    price: Float
    imageUrl: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: String!, input: UpdateProductInput!): Product!
      @requireAuth
    deleteProduct(id: String!): Product! @requireAuth
  }
`
