import gql from "graphql-tag";
export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZ3JhcGhxbC91c2Vycy5zZGwuanMiXSwibmFtZXMiOlsiZ3FsIiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEc7QUFBdEIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkNPIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNjaGVtYSA9IGdxbGBcbiAgdHlwZSBVc2VyIHtcbiAgICBpZDogSW50IVxuICAgIG5hbWU6IFN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmchXG4gICAgaGFzaGVkUGFzc3dvcmQ6IFN0cmluZyFcbiAgICBzYWx0OiBTdHJpbmchXG4gICAgcmVzZXRUb2tlbjogU3RyaW5nXG4gICAgcmVzZXRUb2tlbkV4cGlyZXNBdDogRGF0ZVRpbWVcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHVzZXJzOiBbVXNlciFdISBAcmVxdWlyZUF1dGhcbiAgICB1c2VyKGlkOiBJbnQhKTogVXNlciBAcmVxdWlyZUF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZVVzZXJJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nXG4gICAgZW1haWw6IFN0cmluZyFcbiAgICBoYXNoZWRQYXNzd29yZDogU3RyaW5nIVxuICAgIHNhbHQ6IFN0cmluZyFcbiAgICByZXNldFRva2VuOiBTdHJpbmdcbiAgICByZXNldFRva2VuRXhwaXJlc0F0OiBEYXRlVGltZVxuICB9XG5cbiAgaW5wdXQgVXBkYXRlVXNlcklucHV0IHtcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBlbWFpbDogU3RyaW5nXG4gICAgaGFzaGVkUGFzc3dvcmQ6IFN0cmluZ1xuICAgIHNhbHQ6IFN0cmluZ1xuICAgIHJlc2V0VG9rZW46IFN0cmluZ1xuICAgIHJlc2V0VG9rZW5FeHBpcmVzQXQ6IERhdGVUaW1lXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICBjcmVhdGVVc2VyKGlucHV0OiBDcmVhdGVVc2VySW5wdXQhKTogVXNlciEgQHJlcXVpcmVBdXRoXG4gICAgdXBkYXRlVXNlcihpZDogSW50ISwgaW5wdXQ6IFVwZGF0ZVVzZXJJbnB1dCEpOiBVc2VyISBAcmVxdWlyZUF1dGhcbiAgICBkZWxldGVVc2VyKGlkOiBJbnQhKTogVXNlciEgQHJlcXVpcmVBdXRoXG4gIH1cbmBcbiJdfQ==