import { Link, routes } from '@redwoodjs/router'

import Merchants from 'src/components/Merchant/Merchants'

export const QUERY = gql`
  query FindMerchants {
    merchants {
      id
      partnerId
      name
      address
      postalCode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No merchants yet. '}

      <Link to={routes.newMerchant()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ merchants }) => {
  return <Merchants merchants={merchants} />
}
