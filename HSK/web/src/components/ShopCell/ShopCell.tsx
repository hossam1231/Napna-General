import type { ShopQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Shop from '../Shop/Shop'

export const QUERY = gql`
  query ShopQuery($id: String!) {
    shop: product(id: $id) {
      id
      title
      price
      imageUrl
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ shop }: CellSuccessProps<ShopQuery>) => {
  return <Shop shop={shop} />
}
