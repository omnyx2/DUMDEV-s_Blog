import React from 'react';
import { BOOK,
		SERISE,
		POST } from './POST_TYPE';



class PostTypeComponent extends React.Component{
	constructor(){
		super();
		this.state = {
			type: '',
		}
	}

	typeBookGen = () => {
		return(
			<div className="book-type">
			   books
		   	</div>
			
		);
	}
	
	
	typeRender(){
		switch(this.props.type){
			case BOOK: this.setState({type:BOOK}), return ;
			case SERISE: this.setState({type:BOOK}), return;
			case POST: this.setState({type:BOOK}), eturn;
		}
	}
}
