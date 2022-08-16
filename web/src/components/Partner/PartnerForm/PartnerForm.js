import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PartnerForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.partner?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.partner?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="merchantId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Merchant id
        </Label>

        <TextField
          name="merchantId"
          defaultValue={props.partner?.merchantId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="merchantId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PartnerForm
