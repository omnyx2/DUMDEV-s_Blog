import React  from 'react';
import LoginModal from '../modals/ModalLogin';
import history from '../../history';

class LoginPage extends React.Component{
  
  render(){
	 console.log(history);
		 return (
				 <LoginModal onDismiss={ () => history.goBack()}/> 
	);
  }
}


export default LoginPage;
