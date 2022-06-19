import type {
  FindCollectionQuery,
  FindCollectionQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CollectionQuery {
    collection: products {
      id
      price
      title
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ collection }: CellSuccessProps<CollectionQuery>) => {
  return (
    <>
      {collection.map((product) => (
        <product key={product.id}>
          <header>
            <Link to={routes.product()}>{product.title}</Link>
          </header>
          <p>{product.id}</p>
          <div>Posted at: {product.price}</div>
          <p>{product.imageUrl}</p>
        </product>
      ))}
    </>
  )
}
