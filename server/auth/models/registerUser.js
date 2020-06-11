const bcrypt = require('bcrypt');
const saltRounds = 10;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var registerSchema = new Schema({
	email:String,
	password: String,
	type: String
});

registerSchema.pre("save", async function(next){
	const aErr = new Error('Oops! Something is wrong');
	const hashedPwd = await bcrypt.hashSync(this.password, saltRounds); 
	this.password = hashedPwd
})

registerSchema.methods.loadPassword = function(guess, done){
	console.log("loadPassword is called");	
    const flag = bcrypt.compare(guess, this.password, function(err, isMatch) {
		done(err, isMatch);
	});
};


var User = mongoose.model('User', registerSchema);
module.exports = User;
