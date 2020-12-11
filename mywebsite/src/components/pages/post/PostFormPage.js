import React from 'react';
import Markdown from 'react-markdown';
import TextareaAutosize from 'react-autosize-textarea';
import styled from 'styled-components';

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  border-bottom: ${props => props.borderBottom || '1px solid #e5e5e5'};
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  resize: none;
`;

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    const { mainTitle, subTitle, content} = {...props.post};
    this.state = {
      mainTitle,
      subTitle,
      content,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // forms of fields
  handleMainTitleChange = event => {
    this.setState({mainTitle: event.target.value});
  };
  handleSubTitleChange = event => {
    this.setState({subTitle: event.target.value});
  };
  handleChange = event => {
    this.setState({content: event.target.value});
  };
  // pass to parent component
  handleSubmit = event => {
    this.props.onCommit();
    event.preventDefault();
  };
  handleSave = () => {
    this.props.onSave(this.state);
  };

  //rendering things
  renderMainTitle(event) {
    return (
      <div className="post-main-title">
        <StyledTextarea
          borderBottom="none"
          rows={2}
          type="text"
          value={this.state.mainTitle}
          onChange={this.handleMainTitleChange}
        />
      </div>
    );
  }
  renderSubTitle(event) {
    return (
      <div className="post-sub-title">
        <StyledTextarea
          rows={3}
          type="text"
          value={this.state.subTitle}
          onChange={this.handleSubTitleChange}
        />
      </div>
    );
  }
  renderMainContent(event) {
    return (
      <div className="post-main-title">
        <StyledTextarea
          rows={40}
          maxrows={10000}
          borderBottom="none"
          type="text"
          value={this.state.content}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  render() {
    console.log(this.props);
    return (
      <div className={this.props.className}>
        <div className="markdown-form">
          <div className="markdown-form-1" >
            <form onChange={this.handleSave}>
              <div className="markdown-title">{this.renderMainTitle()}</div>
              <div className="markdown-subtitle">{this.renderSubTitle()}</div>
              <div className="markdown-content">{this.renderMainContent()}</div>
              <div className="commit"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;
