import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuList from '../atoms/MenuList';
import { signIn, signOut } from '../actions';
import LoginButton from '../atoms/LoginButton';

class Header extends React.Component{

	renderMenuList(){
		if( this.props.isSignedIn ){
				return <MenuList />;
		}else{	
				return ;
		}

	}

	render(){
		
		return (
				<div className="ui secondary menu">
					<Link to="/" className="item">HomePage</Link>
					<Link to="/posts" className="item">Posts</Link>
					<Link to="/serise" className="item">Series</Link>
					<Link to="/books" className="item">Books</Link>
					<Link to="/portfolio" className="item">PortfolioPage</Link>
					<div className="right menu">
						<Link to="/search" className="item">
							 <i className="search link icon"></i>
					 	</Link>
						<LoginButton/>
					    {this.renderMenuList()}
					</div>
				</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		isSignedIn: state.auth.isSignedIn
	}
}

export default connect( mapStateToProps, { signIn, signOut })( Header );

