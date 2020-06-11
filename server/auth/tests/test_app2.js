var express = require("express");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
 
var route = require("./routes");//라우트분할
var setUpPassport = require("./setuppassport");
 
var app = express();
//test 데이터베이스로 연결
mongoose.connect("mongodb://localhost:27017/test",{useMongoClient: true});
setUpPassport();
app.set("port",process.env.PORT || 80);
 
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret:"TKRvOIJs=HyqrvagQ#&!f!%V]Ww/4KiVs$s,<<MX",//임의의 문자
  resave:true,
  saveUninitialized:true
}));
/*secret : 각 세션이 클라이언트에서 암호화되도록함. 쿠키해킹방지
resave : 미들웨어 옵션, true하면 세션이 수정되지 않은 경우에도 세션 업데이트
saveUninitialized : 미들웨어 옵션, 초기화되지 않은 세션 재설정*/
app.use(passport.initialize());
app.use(passport.session());
app.use(route);
app.listen(app.get("port"),function(){
  console.log("Server started on port"+app.get("port"));
});
 


