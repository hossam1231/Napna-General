import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PartnerForm from 'src/components/Partner/PartnerForm'

export const QUERY = gql`
  query EditPartnerById($id: String!) {
    partner: partner(id: $id) {
      id
      userId
      merchantId
    }
  }
`



const UPDATE_PARTNER_MUTATION = gql`
  mutation UpdatePartnerMutation($id: String!, $input: UpdatePartnerInput!) {
    updatePartner(id: $id, input: $input) {
      id
      userId
      merchantId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ partner }) => {
  const [updatePartner, { loading, error }] = useMutation(
    UPDATE_PARTNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Partner updated')
        navigate(routes.partners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updatePartner({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Partner {partner.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <PartnerForm
          partner={partner}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
