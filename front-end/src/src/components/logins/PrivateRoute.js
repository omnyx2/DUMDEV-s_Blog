import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const fakeAuth = {
	isAutenticated: true
}


function PrivateRoute({auth, children, ...rest }) {		
  console.log(rest);   
  return (
	<Route

      {...rest}
      render={({ location }) =>
        auth.isSignedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, null )(PrivateRoute);

