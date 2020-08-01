const express = require('express');

const router = express.Router();
module.exports = {quizzes: router};

router.use((req, res, next) => {
	console.log('enter api/quizzes section');
	return next();
});

router.get('/', (req, res) => {
	return res.apiSuccess(req.database.quizzes);
});
