import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:8080/07-WebApi/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
