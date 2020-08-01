const express = require('express');
const database = require('../database');

const router = express.Router();
module.exports = {api: router};

router.use((req, res, next) => {
	console.log('enter api section');
	return next();
});
router.use(database);

const {account} = require('./account')
router.use('/account', account);

const {users} = require('./users')
router.use('/users', users);

const {classes} = require('./classes')
router.use('/classes', classes);

const {quizzes} = require('./quizzes')
router.use('/quizzes', quizzes);
