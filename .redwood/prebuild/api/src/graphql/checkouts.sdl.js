import gql from "graphql-tag";
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
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvY2hlY2tvdXRzLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFNlc3Npb24ge1xuICAgIGlkOiBTdHJpbmchXG4gICAgY3VzdG9tZXJJZDogU3RyaW5nXG4gICAgY3VzdG9tZXJFbWFpbDogU3RyaW5nXG4gICAgY3VzdG9tZXJOYW1lOiBTdHJpbmdcbiAgICBjdXN0b21lclNpZ25lZFVwOiBCb29sZWFuXG4gIH1cblxuICBlbnVtIE1vZGUge1xuICAgIHBheW1lbnRcbiAgICBzdWJzY3JpcHRpb25cbiAgfVxuXG4gIGlucHV0IFByb2R1Y3RJbnB1dCB7XG4gICAgaWQ6IElEIVxuICAgIHF1YW50aXR5OiBJbnQhXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBnZXRTZXNzaW9uKGlkOiBJRCEpOiBTZXNzaW9uISBAc2tpcEF1dGhcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgICMgSW4gR3JhcGhRTCwgd2UgY2FuJ3QgcmV1c2UgdHlwZXMgYXMgbXV0YXRpb24gaW5wdXRzXG4gICAgIyAob3RoZXJ3aXNlIHdlJ2QganVzdCB0eXBlIFwiY2FydFwiIGFzIFwiW1Byb2R1Y3QhXSFcIilcbiAgICBjaGVja291dChtb2RlOiBNb2RlISwgY2FydDogW1Byb2R1Y3RJbnB1dCFdISwgY3VzdG9tZXJJZDogU3RyaW5nKTogU2Vzc2lvbiFcbiAgICAgIEBza2lwQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==