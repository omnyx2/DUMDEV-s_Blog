import React from 'react';
import {Link} from 'react-router-dom';
import ModalLogin from '../components/modals/ModalLogin';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


class LoginButton extends React.Component {
	render(){
	return(
	<div className="login-button">
	<Link to="/login">		
<Button variant="contained" color="primary">
	Login
</Button>
</Link>
</div>);
	}
}

export default LoginButton;
