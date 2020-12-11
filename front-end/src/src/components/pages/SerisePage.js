import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { fetchSerises } from '../../actions';

class SeriseList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hasMoreItems: true,
			prettySerise:[]
		}
	}
	renderSerise = (serise) => {
		if(serise === undefined) return;
		if(serise === {}) return;
		const { title, author, posts } = { ...serise};		 
		//we need date of serise, id of serise
		return (<div>
					<div className="serise-content">
						<div className="serise-card">
							<div className="serise-title"> {title} </div>
							<div className="serise-author"> { author } </div>
							<div className="serise-date"> Oct.22.2019 </div>
							<div className="serise-Intro"> LoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoermLoerm</div>
						</div>
					</div>
				</div>
		);

	}

	seriseLoader = async(page) => {
		// controll end of Infinty scroll	
		const endSeriseFlag = await this.props.fetchSerises(page-1);
	    if( endSeriseFlag === false){
			this.setState( (state) => { return {hasMoreItems: false }});
		}
		// Starting point of page is 1, So we need to set it as 0
		const start = (page-1)*5;
		const end = (page)*5;
		const serise = [];
		for( let i=start; i<end; i++){
			serise.push(this.renderSerise(this.props.serise[i]));
		}
		this.setState(state => {
				return { prettySerise: this.state.prettySerise.concat(serise)}
		});
	}
	
	render(){
		return (
				<div className="infinite-scroll">
					<InfiniteScroll
							pageState={0}
							loadMore={this.seriseLoader}
							hasMore={this.state.hasMoreItems}
							loader={<div className="loader" key={0}>Loading ...</div>}
					>
						{ this.state.prettySerise}
					</InfiniteScroll>

				</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
			serise: state.serise,
			currentId: state.auth.userId,
			isSignedIn: state.auth.siSignedIn
	};
}

export default connect(mapStateToProps, { fetchSerises })(SeriseList);
