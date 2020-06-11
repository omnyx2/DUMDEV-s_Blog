const cors = require('cors');
//const bodyParser = require('body-parser');
const axios = require('axios');
const express = require('express');
const app = express()
const port = 8000;
const restapi = axios.create({
		baseURL: "http://localhost:3002"
});
app.use(cors());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
app.use(express.json());
// Error handling missing!
async function jsonFileGet(id=""){
		const data = await restapi.get(`/posts/${id}`);
		console.log(data.data);
		return data.data;

}

async function jsonDataPost(text, description){
		const data = await restpapi.post(`/posts`, {
			text, description
		});
		console.log(data.data);
		return data.data;
}

app.get('/posts/:id',async (req, res) => {
	const rawObjData = await jsonFileGet(req.params.id);
	const jsonObjData = JSON.stringify(rawObjData);
	res.send(jsonObjData);	
	
});

app.get('/posts',async (req, res) => {
	const rawObjData = await jsonFileGet();
	const jsonObjData = JSON.stringify(rawObjData);
	res.send(jsonObjData);
});

app.post('/posts', async(req, res) => {

	const query = req.body;
	const val = restapi.post('/posts', query);
	res.send(val);	
	// let rawJsonData[text] = await jsonDataPost(req.params.text);
	// let rawJsonData[description] = await jsonDataPost(req.params.description);

})

app.patch('/posts/:id', async(req, res) => {
	const query = req.body;
	console.log(query);
	const val = await restapi.patch(`/posts/${req.params.id}`, query);
	console.log(val);
	res.send(val.data);	
	
});

app.delete('/posts/:id', async(req, res) => {
	const val = await restapi.delete(`/posts/${req.params.id}`);
	console.log(val.data);	
	res.send("deleted! succesed");
});

app.listen(port, ()=> console.log(`connecting:${port}`));

