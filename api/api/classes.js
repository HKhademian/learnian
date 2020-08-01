const express = require('express');

const router = express.Router();
module.exports = {classes: router};

router.use((req, res, next) => {
	console.log('enter api/classes section');
	return next();
});

router.get('/', (req, res) => {
	return res.apiSuccess(req.database.classes);
});
