import {Class, Quiz, User} from "./data";
import {loremIpsum} from "lorem-ipsum";

const users = [
	new User('admin', 'Administrator'),
	new User('mng1', 'Manager 1'),
	new User('drgreen', 'Dr. Green'),
	new User('msbutcher', 'Ms. Butcher'),
	new User('drgeller', 'Dr. Geller'),
	new User('mrbing', 'Mr. Bing'),
	new User('drwill', 'Dr. Will'),
];

const classes = [
	new Class('math1', 'Math 1', loremIpsum(), 17, users[2]),
	new Class('english1', 'English', loremIpsum(), 24, users[3]),
	new Class('logic-math', 'Logic and Mathematics', loremIpsum(), 15, users[4]),
	new Class('culture', 'Culture', loremIpsum(), 35, users[4]),
	new Class('python', 'Python', loremIpsum(), 23, users[5]),
	new Class('cpp', 'C++', loremIpsum(), 11, users[5]),
	new Class('datastruct', 'Data Structures', loremIpsum(), 19, users[6]),
	new Class('ai', 'Ai and Machine Learning', loremIpsum(), 6, users[6]),
];

const quizzes = [
	new Quiz('q1', 'Test Quiz 1'),
];

export default {
	title: 'Learnian',

	defaults: {
		users,
		classes,
		quizzes,
	},
};
