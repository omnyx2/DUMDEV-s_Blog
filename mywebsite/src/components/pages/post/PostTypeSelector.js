import React from 'react';
import { BOOK,
		SERISE,
		POST } from './POST_TYPE';
import styled from 'styled-components';

const StyledLabel = styled.label`
	width: 6Rem;
	padding: 0.4Rem 0.5Rem 0.55Rem 0.5Rem;
	margin: 0.3Rem;
	border-radius: 50px;
	border:  1.2px solid #222222;
	background-color: inherit;
	color: #222222;
    -webkit-transition: background-color 0.3s;
	transition: background-color 0.3s;
	display: inline-block;
	
	&: hover {
		background: #222222;
		border:  1.2px solid #222222;
		color: #f0f0f0;
	}
`;
const StyledInput = styled.input`
  display: none;
	&:nth-of-type(1):checked ~ section.buttons > ${StyledLabel}:nth-of-type(1) { 
		background: #222222;
		border: 1.2px solid #222222;
		color: #f0f0f0;
	};
	&:nth-of-type(2):checked ~ section.buttons > ${StyledLabel}:nth-of-type(2) { 
		background: #222222;
		border: 1.2px solid #222222;
		color: #f0f0f0;
	};
	&:nth-of-type(3):checked ~ section.buttons > ${StyledLabel}:nth-of-type(3) { 
		background: #222222;
		border: 1.2px solid #222222;
		color: #f0f0f0;
	};
`;

class PostTypeSelector extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			type: POST
		};
		this.props.handlePostType(this.state.type);
	}
	handleClick = () =>{
		console.log("clicked");
	}

	handleChange = async (event) => {
		await this.setState({
			type: event.target.value
		});
		await this.props.handlePostType(this.state.type);
	}

	render(){
		return(
			<div className={this.props.className}>
			<div className="type-selector">
					<StyledInput id="post" type="radio" name="tab" value={POST}
							onChange={this.handleChange}
							checked={this.state.type === POST}
					/>
					<StyledInput id="book" type="radio" name="tab" value={BOOK}
							onChange={this.handleChange}
							checked={this.state.type === BOOK}
					/>
					<StyledInput id="serise" type="radio" name="tab" value={SERISE}
							onChange={this.handleChange}
							checked={this.state.type === SERISE}
					/>
					<section className="buttons" onClick={ this.handleClick()}>
						<StyledLabel htmlFor="post">Post</StyledLabel>
						<StyledLabel htmlFor="book">Book</StyledLabel>
						<StyledLabel htmlFor="serise">Serise</StyledLabel>
					</section>

			</div>
	</div>
		);
	}
}

export default PostTypeSelector;

