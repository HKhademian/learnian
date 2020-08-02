const express = require('express');
const {generateID} = require("../../src/common/utils");

const router = express.Router();
module.exports = {quizzes: router};

router.use((req, res, next) => {
	console.log('enter api/quizzes section');
	return next();
});

router.get('/', (req, res) => {
	return res.apiSuccess(req.database.quizzes);
});

router.post('/', (req, res) => {
	const {classId, title, time, point, ownerId} = req.body;
	const newItem = {id: generateID(), classId, title, time, point, questions: []};
	console.log('new quiz to add', newItem);
	req.database.changed = true;
	req.database.quizzes.push(newItem);
	return res.apiSuccess(newItem);
});

router.delete('/', (req, res) => {
	const {id, ownerId} = req.body;
	req.database.changed = true;
	req.database.quizzes = req.database.quizzes.filter(it => it.id !== id);
	return res.apiSuccess();
});


router.post('/questions', (req, res) => {
	const {quizId, ask, answer, options, ownerId} = req.body;
	const quiz = req.database.quizzes.find(it => it.id === quizId);

	const newItem = {id: generateID(), ask, answer, options};
	console.log('new question to add', newItem);
	req.database.changed = true;
	quiz.questions.push(newItem);
	return res.apiSuccess(quiz);
});

