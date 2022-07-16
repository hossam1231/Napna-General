import gql from "graphql-tag";
export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  input UpdatePostInput {
    title: String
    body: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth(roles: ["FOO"])
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZ3JhcGhxbC9wb3N0cy5zZGwuanMiXSwibmFtZXMiOlsiZ3FsIiwic2NoZW1hIl0sIm1hcHBpbmdzIjoiT0FBc0JBLEc7QUFBdEIsT0FBTyxNQUFNQyxNQUFNLEdBQUdELEdBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E1Qk8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFBvc3Qge1xuICAgIGlkOiBJbnQhXG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICBib2R5OiBTdHJpbmchXG4gICAgY3JlYXRlZEF0OiBEYXRlVGltZSFcbiAgfVxuXG4gIHR5cGUgUXVlcnkge1xuICAgIHBvc3RzOiBbUG9zdCFdISBAc2tpcEF1dGhcbiAgICBwb3N0KGlkOiBJbnQhKTogUG9zdCBAc2tpcEF1dGhcbiAgfVxuXG4gIGlucHV0IENyZWF0ZVBvc3RJbnB1dCB7XG4gICAgdGl0bGU6IFN0cmluZyFcbiAgICBib2R5OiBTdHJpbmchXG4gIH1cblxuICBpbnB1dCBVcGRhdGVQb3N0SW5wdXQge1xuICAgIHRpdGxlOiBTdHJpbmdcbiAgICBib2R5OiBTdHJpbmdcbiAgfVxuXG4gIHR5cGUgTXV0YXRpb24ge1xuICAgIGNyZWF0ZVBvc3QoaW5wdXQ6IENyZWF0ZVBvc3RJbnB1dCEpOiBQb3N0ISBAcmVxdWlyZUF1dGhcbiAgICB1cGRhdGVQb3N0KGlkOiBJbnQhLCBpbnB1dDogVXBkYXRlUG9zdElucHV0ISk6IFBvc3QhIEByZXF1aXJlQXV0aFxuICAgIGRlbGV0ZVBvc3QoaWQ6IEludCEpOiBQb3N0ISBAcmVxdWlyZUF1dGgocm9sZXM6IFtcIkZPT1wiXSlcbiAgfVxuYFxuIl19