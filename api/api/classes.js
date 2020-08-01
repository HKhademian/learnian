const express = require('express');
const {generateID} = require("../../src/utils");

const router = express.Router();
module.exports = {classes: router};

router.use((req, res, next) => {
	console.log('enter api/classes section');
	return next();
});

router.get('/', (req, res) => {
	return res.apiSuccess(req.database.classes);
});

router.post('/', (req, res) => {
	const {title, desc, studentCount = 0, ownerId} = req.body;
	const newClass = {id: generateID(), ownerId, title, desc, studentCount};
	console.log('new class to add', newClass);
	req.database.changed = true;
	req.database.classes.push(newClass);
	return res.apiSuccess(newClass);
});

router.delete('/', (req, res) => {
	const {id, ownerId} = req.body;
	req.database.changed = true;
	req.database.quizzes = req.database.quizzes.filter(it => it.classId !== id);
	req.database.classes = req.database.classes.filter(it => it.id !== id);
	return res.apiSuccess();
});
