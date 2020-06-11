const https = require('https');
const http = require('http');
const fs = require('fs');

const proxy = require('express-http-proxy');
const express = require('express');
const app = express();
const cors = require('cors');

// proxy functinos


//proxing server

app.use(cors({
		origin: true,
		credentials: true,
}));

app.use('/admin', proxy('localhost:3001'));
app.use('/blog', proxy('localhost:3002'));
app.use('/auth', proxy('localhost:2000'));
app.use('/userData', proxy('localhost:3003'));
app.use('/posts', proxy('localhost:3004'));
app.use('/tags', proxy('localhost:3005'));
app.all('/', (req, res )=> {
	res.send("hi, But please Don't come here");
	console.log("request?");
});

/*app.all('/.well-known/acme-challenge/:name', function(req, res, next){
	const fileName='/.well-known/acme-challenge/'+req.params.name;
	console.log(req);	
	console.log(fileName);
	res.sendFile(__dirname+fileName);
	next();
});
*/


// openport
const options = {
	key: fs.readFileSync('./https/key.pem'),
	cert: fs.readFileSync('./https/cert.pem'),
};

//http.createServer(app).listen(8080, () => 
//	console.log("starting http server")
//);

https.createServer(options, app).listen(80, () => 
	console.log("starting https server")
);



