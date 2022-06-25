import type { ShopsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Shop from '../Shop/Shop'

export const QUERY = gql`
  query ShopsQuery {
    shops: products {
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

export const Success = ({ shops }: CellSuccessProps<ShopsQuery>) => {
  return (
    <ul>
      {shops.map((shop) => {
        return <Shop key={shop.id} shop={shop} />
      })}
    </ul>
  )
}
