import React from 'react';
import portfolioJson from '../forms/portfolioData';
import './portfolioCss.css';
class Portfolio extends React.Component {
	constructor(props){
		super(props);
		this.data = portfolioJson;		
		this.jsonData = JSON.stringify(portfolioJson, null, 2);
	}

	renderProfile(){
				
		const { faceImgUrl,
				name,
				location,
				phone,
				web,
				Email } = this.data.profile;
		const { lastName, firstName } = name;
		const { country, city, detail } = location;
		return(
				<div className="portfolio__profile">
					<div className="portfolio__basic_header">	
						<div className="portfolio__faceImg">
							<img className="portfolio__faceImg_img" src={faceImgUrl}/>
							</div>
						<div className="portfolio__name">
							<h1>{lastName}_{firstName}</h1>
						</div>
					</div>
					<div className="portfolio__detail_header">
						<div className="portfolio__grid">	
							<div className="location">
								<h4> Location </h4>	
								{country+" "+city+" "+detail}
							</div>
							<div className="phone">
								<h4> Phone </h4>	
								{phone}	
							</div>
							<div className="web">
								<h4> Web </h4>	
								{web}
							</div>
							<div className="Email">
								<h4> Email </h4>	
								{Email}
							</div>	
						</div>
					</div>
				</div>
		);
	}
 
 		renderIntro(){
 		console.log(this.data);
 		const { annotation, content } = this.data.intro;
 		return(
 			<div className="portfolio__intro_box">
 			<div className="portfolio__intro">
				<div className="portfolio__intro_title">
						<h4>INTRO</h4>
 				</div>			
 				<div className="portfolio__intro_annotation">
 					{ annotation }
				</div>
			</div>
 				<div className="portfolio__intro_content">
 					{ content }
 				</div>
 			</div>
 		);
 	}
 
 	renderExpertise(){
 		const expertise = this.data.expertise.items;
 		const { annotation } = this.data.expertise;	
 		var expertiseMerge = [];
 		let i = 0
 		for (var el in expertise) {
 
 			
 			const { title, content } = expertise[el];		;
 			i++;		
 			expertiseMerge.push(
 				<div className="portfolio__expertise_item" key={i}>
					<div className="pportfolio_expertise_item_num">	
						{i}
					</div>		
					<div className="portfolio_expertise_body">
						<div className="portfolio__title">
 							{title}
 						</div>
 						<div className="portfolio__content">
 							{content}
					</div>
			</div>
 				</div>
 			);
 		}
 		return (
 			<div className="portfolio__expertise_box">
 				<div className="portfolio__expertise">
				<div className="portfolio__expertise_title">
						<h4>EXPERTISE</h4>
 			</div>
 			<div className="portfolio__expertise_annotation">
					{ annotation }
			</div>
 			</div>
 			<div className="portfolio__expertise_content">
 				{expertiseMerge}
 			</div>
 		</div>
 		);			
 	}
 	renderEducation(){
 		const  education = this.data.education.items;
 		const { annotation } = this.data.education;	
 		var educationMerge = [];
		let i = 0; 
 		for (var el in education) {
			i++; 
 			
 			const { startYear, endYear ,title, content } = education[el];		;
 					
 			educationMerge.push(
 				<div className="portfolio__education_item" key={i}>
					<div className="portfolio__years">
						{startYear} - {endYear}
					</div>
					<div className="portfolio__title">
 						{title}
					</div>
 					<div className="portfolio__content">
 						{content}
 					</div>
 				</div>
 			);
 		}
 		return (
 			<div className="portfolio__education_box">
 				<div className="portfolio__education">
 				<div className="portfolio__education_title">
						
						<h4>EDUCATION</h4>	
						
 			</div>
 			<div className="portfolio__education_annotation">
					{ annotation }
			</div>
 			</div>
 			<div className="portfolio__education_content">
 				{educationMerge}
 			</div>
 		</div>
 		);			
 	}
 	renderAwards(){
 		const awards = this.data.awards.items;
 		const annotation = this.data.awards.annotation;	
 		var awardsMerge = [];
 		let i = 0;
 		for (var el in awards) {
 
 			
			const { title, content } = awards[el];		;
			awardsMerge.push(
				<div className="portfolio__awards_item" key={++i}>
					<div className="portfolio__title">
						{title}
 					</div>
 					<div className="portfolio__content">
						{content}
 					</div>
 				</div>
			);
 		}
 		return (
			<div className="portfolio__awards_box">
 				<div className="portfolio__awards">
 				<div className="portfolio__awards_title">
						<h4>	AWARDS</h4>
			</div>
			<div className="portfolio__awards_annotation">
					{ annotation }
			</div>
		</div>
			<div className="portfolio__awards_content">
				{awardsMerge}
			</div>
 		</div>
		);			
 	}
	
	render(){
	return(
	<div className="portfolio__gird">
			{this.renderProfile()}
			{this.renderIntro()}
			{this.renderExpertise()}
			{this.renderEducation()}
			{this.renderAwards()}
	</div>

);

}
}

export default Portfolio;
