const express = require('express');
const {generateID} = require('../../src/common/utils');

const router = express.Router();
module.exports = {account: router};

router.get('/logout', (req, res) => {
	return res.cookie('userId', undefined).apiSuccess();
});

router.post('/login', (req, res) => {
	const {username, password} = req.body;

	const user = req.database.users.find(it => it.username === username);
	if (!user) {
		return res.apiError('no user found');
	}

	if (user.password !== password) {
		return res.apiError('wrong password');
	}

	return res.cookie('userId', user.id).apiSuccess({
		id: user.id, title: user.username,
	});
});

router.post('/register', (req, res) => {
	const {username, password, title} = req.body;

	const user = req.database.users.find(it => it.username === username);
	if (user) return res.apiError('username is exists');

	const newUser = {
		id: generateID(), username, password, title
	};
	console.log('new user', newUser);

	req.database.changed = true;
	req.database.users.push(newUser);

	return res.cookie('userId', newUser.id).apiSuccess(200);
});
