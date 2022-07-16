import gql from "graphql-tag";
export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZ3JhcGhxbC9jb250YWN0cy5zZGwuanMiXSwibmFtZXMiOlsiZ3FsIiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEc7QUFBdEIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EvQk8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIENvbnRhY3Qge1xuICAgIGlkOiBJbnQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgbWVzc2FnZTogU3RyaW5nIVxuICAgIGNyZWF0ZWRBdDogRGF0ZVRpbWUhXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBjb250YWN0czogW0NvbnRhY3QhXSEgQHJlcXVpcmVBdXRoXG4gICAgY29udGFjdChpZDogSW50ISk6IENvbnRhY3QgQHJlcXVpcmVBdXRoXG4gIH1cblxuICBpbnB1dCBDcmVhdGVDb250YWN0SW5wdXQge1xuICAgIG5hbWU6IFN0cmluZyFcbiAgICBlbWFpbDogU3RyaW5nIVxuICAgIG1lc3NhZ2U6IFN0cmluZyFcbiAgfVxuXG4gIGlucHV0IFVwZGF0ZUNvbnRhY3RJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nXG4gICAgZW1haWw6IFN0cmluZ1xuICAgIG1lc3NhZ2U6IFN0cmluZ1xuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlQ29udGFjdChpbnB1dDogQ3JlYXRlQ29udGFjdElucHV0ISk6IENvbnRhY3QhIEByZXF1aXJlQXV0aFxuICAgIHVwZGF0ZUNvbnRhY3QoaWQ6IEludCEsIGlucHV0OiBVcGRhdGVDb250YWN0SW5wdXQhKTogQ29udGFjdCEgQHJlcXVpcmVBdXRoXG4gICAgZGVsZXRlQ29udGFjdChpZDogSW50ISk6IENvbnRhY3QhIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXX0=