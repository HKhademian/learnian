const express = require('express');
const {api} = require('./api');

const PORT = 8000;

const app = express();

app.use('/public', express.static('../public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', api);

app.listen(PORT, () => {
	// const {loremIpsum} = require('lorem-ipsum');
	// const {generateID} = require("../src/utils");
	// console.log(generateID(), loremIpsum());
	// console.log(generateID(), loremIpsum());
	// console.log(generateID(), loremIpsum());
	// console.log(generateID(), loremIpsum());
	// console.log(generateID(), loremIpsum());
	// console.log(generateID(), loremIpsum());

	console.log(`Api server listening on port 'http://localhost:${PORT}/' !`);
});
