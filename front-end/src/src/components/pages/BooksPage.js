import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchBooks } from '../../actions';

class BookList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hasMoreItems: true,
			prettyBooks:[]
		}
	}

	renderBook(book){
		const { author, title, date, post } = { ...book };		
		if(book === {}) return;
		if(book === undefined ) return;
		return (
			<div className="book-content">
				<div className="book-card">
					<div className="book-title">{ author }</div>
					<div className="book-author">{ title }</div>
					<div className="book-Intro">IntroIntroIntro</div>
					<div className="book-date">{ date }</div>
				</div>
			</div>
		);
	}
	booksLoader = async (page) => {
		const endflag = await this.props.fetchBooks(page-1);
		const start = (page-1)*5;
		const end = page*5;
		const books = [];
		if(endflag === false){ 
			this.setState((state) => {
				return { hasMoreItems: false}
			});
		}
		for ( let i=start; i<end ; i++ ){
			books.push(this.renderBook(this.props.books[i]));
		}
		this.setState((state) => {
				return { prettyBooks: this.state.prettyBooks.concat(books)}
		});
	}
	render(){
		return (
			<div className="infinity-scroll">
				<InfiniteScroll
						pageStart={0}
						loadMore={this.booksLoader}
						hasMore={this.state.hasMoreItems}
						loader={<div className="loader" key={0}>Loading...</div>}
				>
					{ this.state.prettyBooks }
				</InfiniteScroll>
		</div>);
	}
}

const mapStateToProps = (state) => {
  return {
  	books: state.books,
	currentId: state.auth.userId,
	isSignedIn: state.auth.IsSignedIn
  };
}

export default connect(mapStateToProps, { fetchBooks })(BookList); 
