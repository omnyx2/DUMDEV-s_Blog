const express  = require('express');
const app = express();
const router = express.Router();
const transCode = {
		signedUp: "0",
		failed:{
			default: "1",
			duplicated: "2",
			noEmail: "3",
			noPassword: "4"
		}
};
const User = require('../models/registerUser');


function checkEmailValidation(model, str){
	return checkEmailDuplication(model, str);
};

async function checkEmailDuplication(model, str){

	if(await model.findOne({email: str})) return true;
	else false;
}


router.post('/', async function( req, res){
	if( ("email" in req.body) && !("password" in req.body)){
		let flag = await checkEmailValidation(User, req.body.email);
		if(!flag){
			console.log(" No Duplication");
		}else {
			console.log("Duplication");
			res.send(transCode.failed.duplicated);
		}
	} else if ( ("email" in req.body) && ("password" in req.body)){
		let flag = await checkEmailValidation(User, req.body.email);
		console.log(flag);	
		if(!flag){
			const email = req.body.email;
			const password = req.body.password;

			console.log("Signed UP! Congratueration");
			var newUser = new User({ email, password, type:"local"});
			newUser.save();
			res.send(transCode.signedUp);
		}else{
			console.log("User existing");
			res.send("user existed");
		}
	} else {
		if(!("email" in req.body)){
			console.log("No Email");
			res.send(transCode.failed.noEmail);
		}	
		if(!("password" in req.body))console.log("No password");
	}
});

router.delete('/');
module.exports = router;
