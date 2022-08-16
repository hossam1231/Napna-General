import { Link, routes } from '@redwoodjs/router'

import Partners from 'src/components/Partner/Partners'

export const QUERY = gql`
  query FindPartners {
    partners {
      id
      userId
      merchantId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No partners yet. '}

      <Link to={routes.newPartner()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ partners }) => {
  return <Partners partners={partners} />
}
