import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';
import dateTrimmer from '../../atoms/dateTrim';
import ScrollUpdater   from '../../atoms/ScrollUpdater';
import InfiniteScroll from 'react-infinite-scroller';

class PostList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
				hasMoreItems:true,
				prettyPosts:[]
		}
	}

	renderPost = (post) => {
		if( post === undefined) return;
		if( post === {} ) return ;
		const {id , headers, content } = { ...post };
	 	const { title, author, image, published, data } = { ... headers};
			
		const _image = `https://${image.slice(7)}`;
		const date = new dateTrimmer(data.created);
		return (
				<div className="post-content" key={ post.id }>
					<div className="post-card">
						<Link to={`/posts/${ post.id }`}>
						<div className="card-dot">
						</div>
						<div className="card-image">
								<img src={ _image } height="160" width="320"/>
						</div>
						<div className="post-published">
							{ date.postDate() }
						</div>
						<div className="post-author">
							{ author }
						</div>
						<div className="post-title">
							{ title }
						</div>
						<div className="post-Intro">
							{ content }
						</div>
					</Link>
					</div>
				</div>
			
			);
	}
	
	postsLoader = async (page) => {
		// controll end of Infinty scroll	
		const endPostFlag = await this.props.fetchPosts(page-1);
		if ( endPostFlag === false  ){ 
			this.setState( (state) => {return {hasMoreItems: false }})
		}		
		// Starting point of page is 1, So we need to set it as 0
		const start = (page-1)*5;
		const end = (page)*5;
		const posts = [];
		for ( let i=start ; i<end ; i++){
			posts.push(this.renderPost(this.props.posts[i]));
		}
		this.setState(state => {
			return { prettyPosts: this.state.prettyPosts.concat(posts)};
		});
	}
	
	render(){
			return (<div className="infinite-scroll">
					<InfiniteScroll
					    pageStart={0}
						loadMore={this.postsLoader}
					    hasMore={this.state.hasMoreItems}
					    loader={<div className="loader" key={0}>Loading ...</div>}
					>
						{this.state.prettyPosts}
					</InfiniteScroll>
					</div>
			);
	}
}

const mapStateToProps = state => {
		return {
			posts: state.posts,
			currentId: state.auth.userId,
			isSignedIn: state.auth.isSignedIn
	};
}

export default connect(mapStateToProps,{ fetchPosts })(PostList);
