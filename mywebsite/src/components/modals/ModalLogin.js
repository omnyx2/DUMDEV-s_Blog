import React from 'react';
import ReactDom from 'react-dom';
import GoogleAuth from '../logins/GoogleAuth';
import GoogleButtonAuth from '../logins/GoogleAuthButton';
import LocalLoginAuth from '../logins/LocalLoginPage';

import { Link } from 'react-router-dom';

const LoginModal = (props) => {
	return ReactDom.createPortal(
			<div onClick={props.onDismiss} className="ui dimmer modals visible active">
				<div onClick={ (e) => e.stopPropagation()} className="ui standard modal visible active">
					<div className="google-auth">
						<GoogleButtonAuth/>
						<GoogleAuth />
					</div>
					<div className="local-auth">
						<LocalLoginAuth/>
					</div>
					<div className="sign in">Sign In</div>
					<div className="Sign up"><Link to="/signup">Sign Up</Link></div>
			</div>
	</div>, document.querySelector('#modal'))
};

export default LoginModal;
							

		
