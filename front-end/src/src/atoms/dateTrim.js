export default class DateTrimmer {

	constructor(rawDate) {
		try{	
			this.date = {
				year: rawDate.slice(0, 4),
				month: rawDate.slice(5, 7),
				day: rawDate.slice(8, 10 ),
				hour: rawDate.slice(11, 13),
				minute: rawDate.slice(14, 16),
				second: rawDate.slice(17,19)
			};
		} catch(error) {
			this.date = "no date"
		}
	}

	transDateEnAlias(month){
		switch(month){
			case "01": return "Jan" ;
			case "02": return "Feb" ;
			case "03": return "Mar" ;
			case "04": return "Apr" ;
			case "05": return "May" ;
			case "06": return "Jun" ;
			case "07": return "Jul" ;
			case "08": return "Aug" ;
			case "09": return "Sep" ;
			case "10": return "Oct" ;
			case "11": return "Nov" ;
			case "12": return "Dec" ;
			default: return month;
		}
	}

	postDate(){
		const date = `${ this.transDateEnAlias(this.date.month) }. 
					  ${ this.date.day } 
					  ${ this.date.year }`
		return date;
	}
}
