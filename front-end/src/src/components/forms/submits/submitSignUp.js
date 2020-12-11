import { SubmissionError } from 'redux-form';

const { auth } = require('../../../apis/serverRequest');

function submit(values) {
  console.log(values);
  auth.post('/register', values);
	  
}




//function submit(values){
//	console.log(values);
	
//}

export default submit;
