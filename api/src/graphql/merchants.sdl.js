export const schema = gql`
  type Merchant {
    id: String!
    partnerId: String!
    name: String!
    address: String!
    postalCode: String!
  }

  type Query {
    merchants: [Merchant!]! @requireAuth
    merchant(id: String!): Merchant @requireAuth
  }

  input CreateMerchantInput {
    partnerId: String!
    name: String!
    address: String!
    postalCode: String!
  }

  input UpdateMerchantInput {
    partnerId: String
    name: String
    address: String
    postalCode: String
  }

  type Mutation {
    createMerchant(input: CreateMerchantInput!): Merchant! @requireAuth
    updateMerchant(id: String!, input: UpdateMerchantInput!): Merchant!
      @requireAuth
    deleteMerchant(id: String!): Merchant! @requireAuth
  }
`
