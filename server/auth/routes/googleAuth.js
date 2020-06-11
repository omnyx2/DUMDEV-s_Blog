const express = require("express");
const router = express.Router();
const passport = require("../passports/passport");
const cors = require("cors");
/*
router.use(function(req,res,next){
  var allowedOrigins = ['https://dumdev.com', 'https://a279f55d.ngrok.io', 'http://accounts.google.com'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }else{
    //console.log("CORS Header:"+res.getHeader("Access-Contorl-Allow-Origin"));
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, HEAD, POST, UPDATE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();

})
*/

var whitelist = ['https://dumdev.com', 'http://a279f55d.ngrok.io', 'https://a279f55d.ngrok.io', 'https://accounts.google.com'];


router.use(cors({
	origin: function(origin,callback){
      if (whitelist.indexOf(origin) !== -1) {
		console.log("working origin")
        callback(null, true)
    } else {
	  console.log(origin);
      callback(new Error('Not allowed by CORS!!!'));	
	}},
    credentials: true,
}));

router.use('/', function(req, res, next){
	console.log("this is most basic")
	res.header("THIS-IS-TESTING_FLAG" , 1  );
	next();
});


router.get('/', passport.authenticate('google', { scope:
		['profile']}));

router.get('/callback', passport.authenticate( 'google', { failureRedirect: '/auth/google/login', session: false }),
	function(req, res) {
			console.log("working...");
			var token = req.user.token;
			console.log(token);
			res.send('done');	
			res.header("Access-Control-Allow-Origin", "*")
	}
);

module.exports = router;
