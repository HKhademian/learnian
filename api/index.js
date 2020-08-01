const express = require('express');
const cors = require('cors');
const {api} = require('./api');

const PORT = 8000;

const app = express();
app.use(cors());

app.use('/public', express.static('../public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', api);

app.listen(PORT, () => {
	const {generateID} = require("../common/utils");
	console.log(generateID());
	console.log(generateID());
	console.log(generateID());
	console.log(generateID());
	console.log(generateID());
	console.log(generateID());

	console.log(`Api server listening on port 'http://localhost:${PORT}/' !`);
});
