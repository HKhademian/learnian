const generateID = () => (Date.now() + Math.floor((1.0 + Math.random()) * 1000000000000)).toString(36);

const SERVER_BASE = 'http://localhost:4000';

const fetchApi = (url, data, method = 'POST') =>
	fetch(url, {
		method,
		mode: "cors",
		//credentials: "include",
		headers: {
			//'Access-Control-Allow-Origin': SERVER_BASE,
			'Content-Type': 'application/json',
		},
		body: data && JSON.stringify(data),
	})
		.then(data => data.json())
		.then(data => {
			if (data.status === 'error') throw data;
			return data.result;
		});


module.exports = {generateID, fetchApi, SERVER_BASE};


