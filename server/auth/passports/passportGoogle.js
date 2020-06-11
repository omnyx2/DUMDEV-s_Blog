const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth20' ).Strategy

passport.serializeUser(function(user, done) {
		    done(null, user);
});

passport.deserializeUser(function(obj, done) {
		    done(null, obj);
});

passport.use(new GoogleStrategy({
		        clientID: '771971444403-9tvthtkmd2d633672l4u3bh3nadejr86.apps.googleusercontent.com',
		        clientSecret: 'L00dwqPbx8aC1FUWNVzP0TdM',
		        callbackURL: 'https:/101.101.161.179//auth/google/callback'
		    }, function(accessToken, refreshToken, profile, done) {
					        process.nextTick(function() {
									            user = profile;
									            return done(null, user);
									        });
					    }
));



module.exports = passport;
