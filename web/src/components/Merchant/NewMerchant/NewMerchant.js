import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MerchantForm from 'src/components/Merchant/MerchantForm'

const CREATE_MERCHANT_MUTATION = gql`
  mutation CreateMerchantMutation($input: CreateMerchantInput!) {
    createMerchant(input: $input) {
      id
    }
  }
`

const NewMerchant = () => {
  const [createMerchant, { loading, error }] = useMutation(
    CREATE_MERCHANT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Merchant created')
        navigate(routes.merchants())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createMerchant({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Merchant</h2>
      </header>

      <div className="rw-segment-main">
        <MerchantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMerchant
