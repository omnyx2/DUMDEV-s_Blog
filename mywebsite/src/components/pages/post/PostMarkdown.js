import React from 'react';
import Markdown from 'react-markdown';

class PostMarkdown extends React.Component{
	constructor( props ) {
		super(props);
	}
	render() {
		return(
		<div className={this.props.className}> 	
			<div className="post-markdown-inner" >
				<Markdown className={this.props.className} source={ '# ' + this.props.post.mainTitle } />
				<Markdown source={ '## ' + this.props.post.subTitle } />
				<Markdown source={ this.props.post.content } />
		</div>
		</div>);
	}
}


export default PostMarkdown;
