import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../atoms/renderFields';
import validate from './validates/validateSignUp';
import submit from './submits/submitSignUp';
class SignUpForm extends React.Component{
		
    createField = (name, type, component, label) => {
		return(
			<Field
					name={ name }
					type={ type }
					component={ component }
					label={ label }
			/>
		);
	};

	render(){
		const { handleSubmit, submitting, error} = this.props;
			return(
			<div className="sign-up-field">
				<form onSubmit={handleSubmit(submit)}>
					{ this.createField("username", "username", renderTextField, "User name")}	
					{ this.createField("email", "email", renderTextField, "Email") }
					{ this.createField("password", "password", renderTextField, "Password") }
				{error && <strong>{error}</strong>}
				<button type="submit" disabled={submitting}>
				    Submit
				</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({ form: 'signUpForm'})(SignUpForm);


