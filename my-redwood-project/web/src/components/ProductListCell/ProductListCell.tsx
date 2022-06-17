import type { FindProductListQuery, FindProductListQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindProductListQuery($id: Int!) {
    productList: productList(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindProductListQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  productList,
}: CellSuccessProps<FindProductListQuery, FindProductListQueryVariables>) => {
  return <div>{JSON.stringify(productList)}</div>
}
