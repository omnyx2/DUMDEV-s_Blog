import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTextField } from '../../atoms/renderFields';
import { signInLocal } from '../../actions';
import { auth } from '../../apis/serverRequest';

class LocalLoginPage extends React.Component{
  logOut = () => {	  
	auth.get('/logout');
  }
  localLoginForm = () => {
    const { error, handleSubmit, pristine, reset, submitting } = this.props
  return (
   	 <form onSubmit={handleSubmit(this.props.signInLocal)}>
   	   <Field
   	     name="username"
   	     type="text"
   	     component={renderTextField}
   	     label="Username"
      />
   	   <Field
  	      name="password"
   	     type="password"
   	     component={renderTextField}
   	     label="Password"
   	   />
      {error && <strong>{error}</strong>}
   	   <div>
   	     <button type="submit" disabled={ submitting }>
   	       Log In
   	     </button>
   	     <button type="button" disabled={pristine || submitting} onClick={this.logOut}>
   	       Log Out
        </button>
   	   </div>
 	   </form>
  	)
  }

  render(){
	 return (
		<div className="login-page">
				{ this.localLoginForm() }
		</div>
	);
  }
}

const mapStateToProps = state => {
	return{
		localLoginForm: state.form.localLoginForm
	}
}

export default connect( mapStateToProps, { signInLocal })(reduxForm({
  form: 'localLoginForm' // a unique identifier for this form
})(LocalLoginPage))


