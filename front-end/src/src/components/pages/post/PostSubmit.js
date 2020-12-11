import React from 'react';


class PostSubmit extends React.Component{
	constructor(props){
		super(props);
	}
	handleSubmit = () => {
		const target = this.props.address;
		const method = this.props.method;	
		console.log(this.props.data)
	}
		render() {
	return (
		<div className='post-submit'>
				<button onClick={this.handlSubmit}>
					{ this.props.value }
				</button>
		</div>
	);}

}

export default PostSubmit;
