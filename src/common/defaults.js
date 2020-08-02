const {generateID} = require('./utils');
const {loremIpsum} = require('lorem-ipsum');

const users = [
	{
		"id": "zk90bdnq",
		"title": "Admin",
		"username": "admin",
		"password": "admin",
	},
	{
		"id": "133gmc6l7",
		"title": "Product Manager",
		"username": "prman",
		"password": "manpr",
	},
	{
		"id": "1272ap2lx",
		"username": "drgreen",
		"password": "drgreen",
		"title": "Dr. Green",
	},
	{
		"id": "xq0dxa4n",
		"username": "msbutcher",
		"password": "msbutcher",
		"title": "Ms. Butcher",
	},
	{
		"id": "14nkmq4us",
		"username": "drgeller",
		"password": "drgeller",
		"title": "Dr. Geller",
	},
	{
		"id": "zuwe1fqx",
		"username": "mrbing",
		"password": "mrbing",
		"title": "Mr. Bing",
	},
	{
		"id": "13pnprpxr",
		"username": "drwill",
		"password": "drwill",
		"title": "Dr. Will",
	},
];
const classes = [
	{
		"id": "19po9gqm0",
		"ownerId": "1272ap2lx",
		"title": "Math 1",
		"desc": "Proident mollit aliquip anim duis id irure elit cupidatat.",
		"studentCount": 12,
	},
	{
		"id": "zvko6b7x",
		"ownerId": "xq0dxa4n",
		"title": "English",
		"desc": "Sint cillum aliqua est reprehenderit elit ipsum.",
		"studentCount": 14,
	},
	{
		"id": "14j64v500",
		"ownerId": "14nkmq4us",
		"title": "Logic and Mathematics",
		"desc": "Non sunt nisi tempor nisi esse Lorem.",
		"studentCount": 18,
	},
	{
		"id": "x5kkntqf",
		"ownerId": "zuwe1fqx",
		"title": "Logic and Mathematics",
		"desc": "Tempor consequat aute dolore consectetur voluptate et culpa ex.",
		"studentCount": 11,
	},
	{
		"id": "12r1rylix",
		"ownerId": "xq0dxa4n",
		"title": "Culture",
		"desc": "Ut nostrud qui duis aliqua aute ex adipisicing consequat id irure cillum.",
		"studentCount": 16,
	},
	{
		"id": "13c26u1ok",
		"ownerId": "14nkmq4us",
		"title": "Python for Stocks analysing",
		"desc": "Excepteur cillum eu elit velit adipisicing laborum qui aliquip nulla culpa.",
		"studentCount": 22,
	},
	{
		"id": "x5kkntqf",
		"ownerId": "zuwe1fqx",
		"title": "Advanced C#",
		"desc": "Mollit est sint in nostrud esse voluptate.",
		"studentCount": 20,
	},
	{
		"id": "14qlc14hm",
		"ownerId": "13pnprpxr",
		"title": "Intro to C++",
		"desc": "Irure ullamco duis velit eu amet eu veniam incididunt dolor in.",
		"studentCount": 7,
	},
	{
		"id": "x5kkntqf",
		"ownerId": "13pnprpxr",
		"title": "Data Structures",
		"desc": "Duis incididunt mollit et reprehenderit minim mollit ad fugiat labore aute Lorem.",
		"studentCount": 26,
	},
	{
		"id": "17mu9xu1j",
		"ownerId": "13pnprpxr",
		"title": "Ai and Machine Learning",
		"desc": "Ut nostrud qui duis aliqua aute ex adipisicing consequat id irure cillum.",
		"studentCount": 9,
	},
];
const quizzes = [
	{
		"id": "x5kkntqf",
		"title": "Math Quiz 1",
		"time": 45,
		"points": 15,
		"classId": "19po9gqm0",
		"questions": [
			{
				"ask": "2*2",
				"answer": 2,
				"options": [
					"5",
					"4",
					"1",
					"2",
					"7",
				],
			},
			{
				"ask": "12+5*3",
				"answer": 1,
				"options": [
					"27",
					"15",
					"0",
					"19",
				],
			},
			{
				"ask": "12/3+1",
				"answer": 3,
				"options": [
					"3",
					"7",
					"5",
					"1",
				],
			},
		],
	},
];

module.exports = {users, classes, quizzes};
