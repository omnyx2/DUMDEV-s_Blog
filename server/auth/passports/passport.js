const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const User = require ("../models/registerUser");

passport.use(new LocalStrategy( {
		    usernameField: 'email',
		    passwordField: 'password'
		  },
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      console.log(user);
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
	  user.loadPassword(password, function(err, isMatch){
		 if(!isMatch) { return done(null, false); }
		 else { return done(null, user); }
	  });
    });
  }
));

passport.use(new GoogleStrategy({
		clientID: '771971444403-9tvthtkmd2d633672l4u3bh3nadejr86.apps.googleusercontent.com',
        clientSecret: 'L00dwqPbx8aC1FUWNVzP0TdM',
		callbackURL: 'https://dumdev.com/auth/google/callback',
    }, function(accessToken, refreshToken, profile, done) {
		console.log("hi~");	
	User.findOrCreate({googleId: profile.id},function(err, user) {
		user = profile;
		var userData = {
			email: profile.emails[0].value,
			name: profile.display,
			token: acessToken
		};
		console.log(user);
        return done(error, user);
	 });
	}
));
// 유저라 로그인 했을 때 (에러가 날경우, 해당계정없음, 비밀번호 부적합, 로그인 성공)에 대한 처리

passport.serializeUser(function(user, done) {
	console.log("serializer"+user);	
	done(null, user.id);
});
// user ID를 클라이언트한테 쿠키로 보내기 설정

passport.deserializeUser(function(id, done) {
  console.log("deserializer"+id);	
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// 쿠키로 인증 성공/실패시 처리
module.exports = passport;
