import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MerchantForm from 'src/components/Merchant/MerchantForm'

export const QUERY = gql`
  query EditMerchantById($id: String!) {
    merchant: merchant(id: $id) {
      id
      partnerId
      name
      address
      postalCode
    }
  }
`
const UPDATE_MERCHANT_MUTATION = gql`
  mutation UpdateMerchantMutation($id: String!, $input: UpdateMerchantInput!) {
    updateMerchant(id: $id, input: $input) {
      id
      partnerId
      name
      address
      postalCode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ merchant }) => {
  const [updateMerchant, { loading, error }] = useMutation(
    UPDATE_MERCHANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Merchant updated')
        navigate(routes.merchants())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateMerchant({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Merchant {merchant.id}
        </h2>
      </header>

      <div className="rw-segment-main">
        <MerchantForm
          merchant={merchant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
