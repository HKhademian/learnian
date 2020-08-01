const express = require('express');

const router = express.Router();
module.exports = {users: router};

router.use((req, res, next) => {
	console.log('enter api/users section');
	return next();
});

router.get('/', (req, res) => {
	const users = req.database.users;
	const view = users.map(it => ({id: it.id, title: it.title}));
	return res.apiSuccess(view);
});
