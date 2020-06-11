const validate = values => {
  const errors = {}
  if( !values.username ){
	errors.username = 'Required'
  }	else if ( values.username.length > 15 ) {
  	errors.username = "It's too long, less then 15";
  }
   if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  } 
  if ( !values.password ) {
	errors.password = 'Required'			
  } else if ( (values.password.length)< 9 ) {
  	errors.password = "It's too short, more then 9";
  } else if ( values.password.length > 15 ) {
    errors.password = "It's too long, less then 15";
  }
  return errors
}

export default validate
