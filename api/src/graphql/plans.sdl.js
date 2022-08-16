export const schema = gql`
  type Plan {
    id: String!
    name: String
    price: String!
    body: String!
  }

  type Query {
    plans: [Plan!]! @requireAuth
    plan(id: String!): Plan @requireAuth
  }

  input CreatePlanInput {
    name: String
    price: String!
    body: String!
  }

  input UpdatePlanInput {
    name: String
    price: String
    body: String
  }

  type Mutation {
    createPlan(input: CreatePlanInput!): Plan! @requireAuth
    updatePlan(id: String!, input: UpdatePlanInput!): Plan! @requireAuth
    deletePlan(id: String!): Plan! @requireAuth
  }
`
