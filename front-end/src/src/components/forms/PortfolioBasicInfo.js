import React from 'react'
import { Field, reduxForm } from 'redux-form'
import submit from '../../atoms/submit'
import { renderTextField } from '../../atoms/renderFields';
import Button from '@material-ui/core/Button';

// below Code allow to dly design
/*const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
	<input {...input} placeholder={label}type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)*/
const fields = () => {
		return(<div>
				</div>
	)
}


const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Field
        name="username"
        type="text"
        component={renderTextField}
        label="Username"
      />
      <Field
        name="location"
        type="location"
        component={renderTextField}
        label="Location"
      />
      <Field
        name="phone"
        type="phone"
        component={renderTextField}
        label="Phone"
      />
      <Field
        name="web"
        type="web"
        component={renderTextField}
        label="Web"
      />
      <Field
        name="email"
        type="email"
        component={renderTextField}
        label="Email"
      />
      <Field
        name="intro"
        type="intro"
        component={renderTextField}
        label="Intro"
      />
      {error && <strong>{error}</strong>}
      <div>
        <Button color="primary" type="submit" disabled={submitting}>
          Log In
        </Button>
        <Button color="secondary"type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation' // a unique identifier for this form
})(SubmitValidationForm);
