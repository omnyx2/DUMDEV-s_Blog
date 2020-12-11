import React from 'react';
import BookTypeData from '../pages/posts/BookTypeData';
 

const handleSubmit = (data) => {
	console.log(data);
}

const BookModal = (props) => {
	return ReactDom.createPortal(
		<div onClick={props.onDismiss} className="ui dimmer modals visible active">
			<div className="book-data-modal">
				<BookTypeData handleBookDtaSubmit={ handleSubmit }/>			
			</div>
		</div>
	);
}


export BookComponent;
