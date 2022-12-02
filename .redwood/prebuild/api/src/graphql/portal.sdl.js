import gql from "graphql-tag";
export const schema = gql`
  type Session {
    id: String!
    url: String!
  }

  type Mutation {
    # In GraphQL, we can't reuse types as mutation inputs
    portal(userId: ID!): Session! @requireAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcG9ydGFsLnNkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2NoZW1hID0gZ3FsYFxuICB0eXBlIFNlc3Npb24ge1xuICAgIGlkOiBTdHJpbmchXG4gICAgdXJsOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIE11dGF0aW9uIHtcbiAgICAjIEluIEdyYXBoUUwsIHdlIGNhbid0IHJldXNlIHR5cGVzIGFzIG11dGF0aW9uIGlucHV0c1xuICAgIHBvcnRhbCh1c2VySWQ6IElEISk6IFNlc3Npb24hIEByZXF1aXJlQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIn0=