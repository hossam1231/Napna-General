import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_PARTNER_MUTATION = gql`
  mutation DeletePartnerMutation($id: String!) {
    deletePartner(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Partner = ({ partner }) => {
  const [deletePartner] = useMutation(DELETE_PARTNER_MUTATION, {
    onCompleted: () => {
      toast.success('Partner deleted')
      navigate(routes.partners())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete partner ' + id + '?')) {
      deletePartner({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Partner {partner.id} Detail
          </h2>
        </header>

        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>

              <td>{partner.id}</td>
            </tr>
            <tr>
              <th>User id</th>

              <td>{partner.userId}</td>
            </tr>
            <tr>
              <th>Merchant id</th>

              <td>{partner.merchantId}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav className="rw-button-group">
        <Link
          to={routes.editPartner({ id: partner.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>

        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(partner.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Partner
