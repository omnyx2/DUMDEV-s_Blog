const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const mongoose = require("mongoose");
const app = express();
const registerRoute = require("./routes/register");
const localAuthRoute = require("./routes/localAuth");
const googleAuthRoute = require("./routes/googleAuth");
const passport = require('./passports/passport.js');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/auth", { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

app.use(cors({
		origin:true,
		credentials:true
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(session({secret:"nodenodenodejs",
				resave: true,
				saveUninitialized: true,
			    store: new FileStore(),
				cookie: { secure: false },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/register', registerRoute);
app.use('/local', localAuthRoute);
app.use('/google', googleAuthRoute);

app.use('/logout', function(request, response){
	request.logout();
	request.session.save(function(){
		response.redirect('/');
	});
});


app.listen(2000);

