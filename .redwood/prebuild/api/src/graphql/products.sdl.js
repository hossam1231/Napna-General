import gql from "graphql-tag";
export const schema = gql`
  scalar URL

  type Product {
    id: ID!
    name: String!
    image: String
    description: String
    price: Int!
    type: String!
  }

  enum ProductType {
    one_time
    recurring
  }

  type Query {
    products(type: ProductType): [Product!]! @skipAuth
  }
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJzY2hlbWEiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2dyYXBocWwvcHJvZHVjdHMuc2RsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzY2hlbWEgPSBncWxgXG4gIHNjYWxhciBVUkxcblxuICB0eXBlIFByb2R1Y3Qge1xuICAgIGlkOiBJRCFcbiAgICBuYW1lOiBTdHJpbmchXG4gICAgaW1hZ2U6IFN0cmluZ1xuICAgIGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICBwcmljZTogSW50IVxuICAgIHR5cGU6IFN0cmluZyFcbiAgfVxuXG4gIGVudW0gUHJvZHVjdFR5cGUge1xuICAgIG9uZV90aW1lXG4gICAgcmVjdXJyaW5nXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBwcm9kdWN0cyh0eXBlOiBQcm9kdWN0VHlwZSk6IFtQcm9kdWN0IV0hIEBza2lwQXV0aFxuICB9XG5gXG4iXSwibWFwcGluZ3MiOiJPQUFzQkEsR0FBRztBQUF6QixPQUFPLE1BQU1DLE1BQU0sR0FBR0QsR0FBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMifQ==