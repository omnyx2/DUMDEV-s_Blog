import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';
import dateTrimmer from '../../atoms/dateTrim';

class PostPage extends React.Component{
	async componentDidMount() {
		await this.props.fetchPost(this.props.match.params.id);
	}
	renderPost(){
		const { content, headers } = { ...this.props.post }
		const { type, category, image, tags, author, data, title } = { ...headers }
		const { created, fixed } = { ...data };
		const createdDate = new dateTrimmer(created);
			
		return (
			<div className="post-content">
				<div className="post-inner-content">
					<div className="post-title">
						<h1>{ title }</h1>
					</div>
					<div className="post-author">
						<h4>{ author }</h4>
					</div>
					<div className="post-Intro">
						<h6> IIntroIntroIntroIntroIntroIntroIntrontro</h6>
					</div>
					<div className="post-date">
						<h5>{ createdDate.postDate() }</h5>
					</div>
					<div className="post-pargragh">
						<p>{ content }</p>
					</div>
				</div>
			</div>
		);
	}
	
	render(){
		return (
			<div className="post">
				{ this.renderPost() }
			</div>
		);
	}
}

const mapStateToProps = ((state, ownProps) => {
	return {
		post: state.post,
		currentId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	};
})

export default connect( mapStateToProps, { fetchPost })( PostPage );

