import Merchant from 'src/components/Merchant/Merchant'

export const QUERY = gql`
  query FindMerchantById($id: String!) {
    merchant: merchant(id: $id) {
      id
      partnerId
      name
      address
      postalCode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Merchant not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ merchant }) => {
  return <Merchant merchant={merchant} />
}
