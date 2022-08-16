export const schema = gql`
  type Partner {
    id: String!
    userId: String
    merchantId: String!
  }

  type Query {
    partners: [Partner!]! @requireAuth
    partner(id: String!): Partner @requireAuth
  }

  input CreatePartnerInput {
    userId: String
    merchantId: String!
  }

  input UpdatePartnerInput {
    userId: String
    merchantId: String
  }

  type Mutation {
    createPartner(input: CreatePartnerInput!): Partner! @requireAuth
    updatePartner(id: String!, input: UpdatePartnerInput!): Partner!
      @requireAuth
    deletePartner(id: String!): Partner! @requireAuth
  }
`
