import React from 'react';
import { stateToMarkdown } from 'draft-js-export-markdown';
import { connect } from 'react-redux';

class MarkdownGenerator extends React.Component{
	componentDidMount(){
		this.props.editorState = 
	}

	renderMarkdown = () => {	
	    const markdown = stateToMarkdown(this.props.editorState.getCurrentContent());
		return ;	
	}
	render(){
		return(
			<div>
				{this.renderMarkdown()}	
			</div>
		);

	}
}
const mapStateToProps = (state) => {
	return {
		editorState: state.editor.editorState.editorState
	};
}

export default connect(mapStateToProps, null)(MarkdownGenerator); 



