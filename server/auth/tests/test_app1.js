const session = require('express-session');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session);
// react에서 사용할떄는 아래의 코드가 필요하다.
app.use(cors({
			origin:true,
			credentials: true
}));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
//여기까지 있어야 passport에서 인식을한다
app.use(session({
		secret: 'askjdflaskjfd',
		resave: false,
		saveUninitialized: true,
		store: new FileStore(),
		cookie: { secure: false },
}));


var authData={
	email:"omnyx2",
	password: "123456789a",
}

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {//여기에 데이터를 넘기게끔 설정되어 있다.
		console.log('seriallizerUser', user);
		done(null, user.email);
		// done(null, user.id);
});

passport.deserializeUser(function(id, done) {
		console.log('deserializerUser', id);
		done(null, authData);
		//  User.findById(id, function(err, user) {
		//    done(err, user);
		//  });
});

passport.use(new LocalStrategy(
{
    usernameField: 'userid',
    passwordField: 'pwd',
},
  function(username, password, done) {
	console.log('LocalStratege', username, password);
	  if(username === authData.email){
		console.log(1);	  
		if(password === authData.password){
			console.log(2);
			return done(null, authData);
		} else {
			console.log(3);
			return done(null, false, {
				message: 'incorrect password',
			});
		}
	  }	else {
		console.log(4);
		  return done(null, false, {
			message: 'Incorrect username',
	  	});
	  }
  
/*    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
*/
  }
));


app.post('/login', passport.authenticate('local',{ successRedirect: '/',
		failureRedirect: '/auth' }));

app.get('/auth', (req, res) => {
	res.send('login failed');
});
app.get('/books/:id', (req, res) => {
	res.send("failed");
});
app.get('/serise/:id', (req, res) => {
	res.send("failed");
});
app.get('/posts/:id', (req, res) => {
	res.send("failed");
});
app.all('/',(req,res) =>{
	console.log(req.user);
	res.send("login sucessed");
})
app.get('/logout', (req, res) => {
		
	console.log("logout");		
	req.logout();
	req.session.save(function(){
		res.redirect('/');
	})
});


app.listen(2000);
