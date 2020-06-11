import React from 'react';
import PostForm from './PostFormPage';
import {post} from '../../../apis/serverRequest';
import TagsInput from 'react-tagsinput';
import PostTypeSelector from './PostTypeSelector';
import styled from 'styled-components';
import PostMarkdown from './PostMarkdown';
import PostSubmit from './PostSubmit';
// const StyledPostSubmit = styled(PostSubmit)`
// `;
// const StyledTagsInput = styled(TagsInput)`
// `;
const StyledPostTypeSelector = styled(PostTypeSelector)`
	flex: 1 0 70px;
	max-width: 100px;
	padding-right: 150px;
	padding-left: 10px;
`;
const StyledPostForm = styled(PostForm)`
	display: block;
	max-width: 700px;
	flex: 9 0 600px;
`;
const StyledPostMarkdown = styled(PostMarkdown)`
	padding: 5%
	flex: 9 0 700px;
	max-width: 700px;
	min-width: 600px;
	display: block;
	display: inline-block; 
`;



class CreatePost extends React.Component {
  constructor() {
    super();
    let mainTitle = 'Title',
      tags = ['default'],
      subTitle = 'Sub title',
	  content = 'fill in ...',
	  type='POST';
    const rememberPost = JSON.parse(localStorage.getItem('rememberPost'));
    if (rememberPost != null) {
      mainTitle = rememberPost.mainTitle ? rememberPost.mainTitle : mainTitle;
      tags = rememberPost.tags ? rememberPost.tags : [];
      subTitle = rememberPost.subTitle ? rememberPost.subTitle : subTitle;
      content = rememberPost.content ? rememberPost.content : content;
    }
	this.state = {
	  type,
      tags,
      mainTitle,
      subTitle,
      content,
    };
  }

  initValue = () => {
    const {mainTitle, subTitle, content, tags} = {...this.state};
    return {
      tags,
      mainTitle,
      subTitle,
      content,
    };
  };
		
  handleTagsChange = tags => {
    this.setState({tags: tags});
    localStorage.setItem('rememberPost', JSON.stringify(this.state));
  };
  handleCommit = async data => {
    //	const response = await post.post("/post/", this.state);
  };
  handlePostType = type => {
    this.setState({type});
    console.log(this.state.type);
  }
  //
  handleSave = childState => {
    this.setState({mainTitle: childState.mainTitle});
    this.setState({content: childState.content});
    this.setState({subTitle: childState.subTitle});
    console.log(this.state);
    localStorage.setItem('rememberPost', JSON.stringify(this.state));
  };

  render() {
    return (
	<div className="posting">
	  <div className="plain-post-form-0">
	  <div className="plain-post-form-1">
		  <div style={{
			  display: 'flex',
			  flexDirection:'row',
		  }}
	  className="plain-post-form-2"
	  >		
		<StyledPostForm
            onSave={this.handleSave}
            post={this.initValue()}
          />
		  <StyledPostTypeSelector
		  	handlePostType={this.handlePostType}
		  />
		  <StyledPostMarkdown 
			post={this.state}
		  />
        </div>
        <TagsInput
          value={this.state.tags}
          onChange={this.handleTagsChange}
  		/>
		<PostSubmit 
			data={this.handleCommit} 
			target={post} 
			method="post"
	        value="Commit"
	    />
		</div>
	</div>
    </div>
    );
  }
}

export default CreatePost;
