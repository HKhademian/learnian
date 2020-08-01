const express = require('express');
const {loremIpsum} = require('lorem-ipsum');
const {generateID} = require('../../common/utils');

const router = express.Router();
module.exports = {account: router};

router.post('/login', (req, res) => {
	const {username, password} = req.body;

	const user = req.database.users.find(it => it.username === username);
	if (!user) return res.status(500).send('no user found');

	if (user.password !== password) return res.status(500).send('wrong password');

	return res.cookie('userId', user.id).sendStatus(200);
});

router.get('/register', (req, res) => {
	const {username, password, title} = req.body;

	const user = req.database.users.find(it => it.username === username);
	if (user) return res.status(500).send('username is exists');

	req.database.changed = true;
	req.database.users.push({
		id: generateID(), username, password, title
	});

	return res.cookie('userId', user.id).sendStatus(200);
});
