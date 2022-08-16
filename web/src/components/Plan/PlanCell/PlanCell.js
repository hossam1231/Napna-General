import Plan from 'src/components/Plan/Plan'

export const QUERY = gql`
  query FindPlanById($id: String!) {
    plan: plan(id: $id) {
      id
      name
      price
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Plan not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plan }) => {
  return <Plan plan={plan} />
}
