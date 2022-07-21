export const schema = gql`
  type Plan {
    id: String!
    name: String!
    description: String!
    price: Int!
  }

  type Query {
    plans: [Plan!]! @requireAuth
    plan(id: String!): Plan @requireAuth
  }

  input CreatePlanInput {
    name: String!
    description: String!
    price: Int!
  }

  input UpdatePlanInput {
    name: String
    description: String
    price: Int
  }

  type Mutation {
    createPlan(input: CreatePlanInput!): Plan! @requireAuth
    updatePlan(id: String!, input: UpdatePlanInput!): Plan! @requireAuth
    deletePlan(id: String!): Plan! @requireAuth
  }
`
