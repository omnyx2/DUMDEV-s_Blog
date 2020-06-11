import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../../atoms/renderFields';


class BookTypeData extends React.Component {

  createField = ( bookName, author, data) => {
		return(
			<Field
					name={ bookTitle }
					type={ type }
					component={ component }
					label={ label }
			/>
		);
	};
	
	handleSubmit = () => {
		this.props.handleBookDataSubmit		
	}

	render() {
		return(
			<div className="book type data">
					<form onSubmit="save book data">
						{ this.createField("booktitle","booktitle",renderTextField,"Book Title")}
						{ this.createField("publisheddate","publisheddate",renderTextField,"Pulished Date")}
						{ this.createField("author","author",renderTextField,"Author")}
						<div className="book data submit">
							<button> Save Data </button>
						</div>
					</form>
				</div>
		);
	}
}

export default BookTypeData;
