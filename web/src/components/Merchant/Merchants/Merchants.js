import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Merchant/MerchantsCell'

const DELETE_MERCHANT_MUTATION = gql`
  mutation DeleteMerchantMutation($id: String!) {
    deleteMerchant(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MerchantsList = ({ merchants }) => {
  const [deleteMerchant] = useMutation(DELETE_MERCHANT_MUTATION, {
    onCompleted: () => {
      toast.success('Merchant deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete merchant ' + id + '?')) {
      deleteMerchant({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>

            <th>Partner id</th>

            <th>Name</th>

            <th>Address</th>

            <th>Postal code</th>

            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {merchants.map((merchant) => (
            <tr key={merchant.id}>
              <td>{truncate(merchant.id)}</td>

              <td>{truncate(merchant.partnerId)}</td>

              <td>{truncate(merchant.name)}</td>

              <td>{truncate(merchant.address)}</td>

              <td>{truncate(merchant.postalCode)}</td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.merchant({ id: merchant.id })}
                    title={'Show merchant ' + merchant.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>

                  <Link
                    to={routes.editMerchant({ id: merchant.id })}
                    title={'Edit merchant ' + merchant.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>

                  <button
                    type="button"
                    title={'Delete merchant ' + merchant.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(merchant.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MerchantsList
