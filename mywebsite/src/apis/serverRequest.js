import axios from 'axios';

export const blog = axios.create({
	baseURL: 'https://dumdev.com:80/blog',
	withCredentials: true
});

export const post = axios.create({
	baseURL: 'https://dumdev.com:80/post'
});

export const auth = axios.create({
	baseURL: 'https://dumdev.com:80/auth',
	withCredentials: true,
	headers: {
	  'Access-Control-Allow-Origin': '*',
	},
	proxy: {
	  host: 'dumdev.com',
	}
});



//withCredentials가 있어야 쿠키를 cors하게 받아들일 수 있다.
