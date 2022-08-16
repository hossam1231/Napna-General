import Partner from 'src/components/Partner/Partner'

export const QUERY = gql`
  query FindPartnerById($id: String!) {
    partner: partner(id: $id) {
      id
      userId
      merchantId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Partner not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ partner }) => {
  return <Partner partner={partner} />
}
