import {Class, Question, Quiz, User} from "./data";
import {loremIpsum} from "lorem-ipsum";
import {generateID} from "./utils";

const userAdmin = new User('admin', 'Administrator');
const userManager1 = new User('mng1', 'Manager 1');
const userDrGreen = new User('drgreen', 'Dr. Green');
const userMsButcher = new User('msbutcher', 'Ms. Butcher');
const userDrGeller = new User('drgeller', 'Dr. Geller');
const userMrBing = new User('mrbing', 'Mr. Bing');
const userDrWill = new User('drwill', 'Dr. Will');

const users = [
	userAdmin, userManager1, userDrGreen, userMsButcher, userDrGeller, userMrBing, userDrWill,
];

const classMath1 = new Class('math1', 'Math 1', loremIpsum(), 17, userDrGreen);
const classEnglish1 = new Class('english1', 'English', loremIpsum(), 24, userMsButcher);
const classLogic = new Class('logic-math', 'Logic and Mathematics', loremIpsum(), 15, userDrGeller);
const classCulture = new Class('culture', 'Culture', loremIpsum(), 35, userDrGeller);
const classPython = new Class('python', 'Python', loremIpsum(), 23, userMrBing);
const classCpp = new Class('cpp', 'C++', loremIpsum(), 11, userMrBing);
const classDS = new Class('datastruct', 'Data Structures', loremIpsum(), 19, userDrWill);
const classAI = new Class('ai', 'Ai and Machine Learning', loremIpsum(), 6, userDrWill);
const classes = [
	classMath1, classEnglish1, classLogic, classCulture, classPython, classCpp, classDS, classAI,
];

const quizzes = [
	new Quiz(generateID(), 'Math Quiz 1', 45, 15, classMath1,
		new Question("2*2", 2, "0", "4", "9", "5"),
		new Question("12+5*3", 1, "27", "15", "0", "19"),
		new Question("12/3+1", 2, "3", "5", "7", "1"),
	),
];

export default {
	title: 'Learnian',

	defaults: {
		users,
		classes,
		quizzes,
	},
};
