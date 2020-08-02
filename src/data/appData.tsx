import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

import {fetchApi, SERVER_BASE} from '../common/utils';// @ts-ignore
import defaults from '../common/defaults';// @ts-ignore
import {Class, Question, Quiz, User} from './';

const API_BASE = `${SERVER_BASE}/api`;
const API_ACCOUNT_BASE = `${API_BASE}/account`;
const API_ACCOUNT_LOGIN = `${API_ACCOUNT_BASE}/login`;
const API_ACCOUNT_LOGOUT = `${API_ACCOUNT_BASE}/logout`;
const API_ACCOUNT_REGISTER = `${API_ACCOUNT_BASE}/register`;

const API_USERS = `${API_BASE}/users`;
const API_CLASSES = `${API_BASE}/classes`;
const API_QUIZZES = `${API_BASE}/quizzes`;
const API_QUESTIONS = `${API_BASE}/quizzes/questions`;

function jsonToArray<T>(mapper: (data: any) => T) {
	return (data: any) => (data as any[]).map(mapper)
}

const jsonToUser = (data: any) => new User(data.id, data.title);
const jsonToClass = (data: any) => new Class(data.id, data.title, data.desc, data.studentCount || 0, data.ownerId);
const jsonToQuestion = (data: any) => new Question(data.ask, data.answer, ...data.options);
const jsonToQuiz = (data: any) => {
	const questions = data.questions.map(jsonToQuestion);
	return new Quiz(data.id, data.title, data.time, data.point, data.classId, ...questions);
}

export type AppData = {
	classes: Class[],
	addClass: (title: string, desc: string) => any,
	deleteClass: (id: string) => any,
	gotoClass: (id: string, info?: boolean) => any,

	quizzes: Quiz[],
	addQuiz: (classId: string, title: string, time: number, point: number) => any,
	deleteQuiz: (id: string) => any,
	addQuestion: (quizId: string, ask: string, answer: number, options: string[]) => any,
	gotoQuiz: (id: string) => any,

	user: User | undefined,
	users: User[],
	register: (username: string, password: string, title: string) => any,
	login: (username: string, password: string) => any,
	logout: () => any,

	loadAllUsers: () => Promise<any>,
	loadAllClasses: () => Promise<any>,
	loadAllQuizzes: () => Promise<any>,
};

export const AppDataContext = React.createContext<AppData>(undefined as any as AppData);

export const AppDataProvider = ({children}: { children: any }) => {
	const history = useHistory();

	const defaultUsers = jsonToArray(jsonToUser)(defaults.users);
	const defaultClasses = jsonToArray(jsonToClass)(defaults.classes);
	const defaultQuizzes = jsonToArray(jsonToQuiz)(defaults.quizzes);

	const [user, setUser] = useState<User | undefined>(defaultUsers[0]);
	const [users, setUsers] = useState<User[]>(defaultUsers);
	const [classes, setClasses] = useState<Class[]>(defaultClasses);
	const [quizzes, setQuizzes] = useState<Quiz[]>(defaultQuizzes);

	const register = (username: string, password: string, title: string) =>
		fetchApi(API_ACCOUNT_REGISTER, {username, password, title})
			.then(jsonToUser)
			.then(data => {
				setUser(data);
				history.replace('/');
			})
			.catch(err => {
				alert(err);
			});

	const login = (username: string, password: string) =>
		fetchApi(API_ACCOUNT_LOGIN, {username, password})
			.then(jsonToUser)
			.then(data => {
				setUser(data);
				history.replace('/');
			})
			.catch(err => {
				alert(err);
			});

	const logout = () =>
		fetchApi(API_ACCOUNT_LOGOUT, undefined, 'GET')
			.then(_ => {
				setUser(undefined);
				history.replace('/');
			})
			.catch(err => {
				alert(err);
			});


	const gotoClass = (id: string, info: boolean = false) => {
		if (info) history.push(`/class/${id}`);
		else history.push(`/classroom/${id}`);
	}

	const addClass = (title: string, desc: string) => {
		if (!user) return alert('you most login first');
		return fetchApi(API_CLASSES, {title, desc, ownerId: user.id}, 'POST')
			.then(jsonToClass)
			.then(data => {
				setClasses([...classes, data]);
				gotoClass(data.id);
			})
			.catch(err => {
				alert(err);
			});
	}

	const deleteClass = (id: string) => {
		if (!user) return alert('you most login first');
		return fetchApi(API_CLASSES, {id, ownerId: user.id}, 'DELETE')
			.then(_ => {
				setClasses(classes.filter(it => it.id !== id));
				setQuizzes(quizzes.filter(it => it.classId !== id));
				// history.goBack();
			})
			.catch(err => {
				alert(err);
			});
	}


	const gotoQuiz = (id: string) =>
		history.push(`/quiz/${id}`);

	const addQuiz = (classId: string, title: string, time: number, point: number) => {
		if (!user) return alert('you most login first');
		if (!classId) return alert('you most choose a class');
		return fetchApi(API_QUIZZES, {classId, title, time, point, ownerId: user.id}, 'POST')
			.then(jsonToQuiz)
			.then(data => {
				setQuizzes([...quizzes, data]);
				gotoQuiz(data.id);
			})
			.catch(err => {
				alert(err);
			});
	}

	const deleteQuiz = (id: string) => {
		if (!user) return alert('you most login first');
		return fetchApi(API_QUIZZES, {id, ownerId: user.id}, 'DELETE')
			.then(_ => {
				setQuizzes(quizzes.filter(it => it.id !== id));
				// history.goBack();
			})
			.catch(err => {
				alert(err);
			});
	}

	const addQuestion = (quizId: string, ask: string, answer: number, options: string[]) => {
		if (!user) return alert('you most login first');
		if (!quizId) return alert('you most choose a quiz');
		return fetchApi(API_QUESTIONS, {quizId, ask, answer, options, ownerId: user.id}, 'POST')
			.then(jsonToQuiz)
			.then(data => {
				setQuizzes([...quizzes.filter(it => it.id !== quizId), data]);
				gotoQuiz(quizId);
			})
			.catch(err => {
				alert(err);
			});
	}


	const loadAllUsers = () =>
		fetchApi(API_USERS, undefined, 'GET')
			.then(jsonToArray(jsonToUser))
			.then(res => {
				console.log('users', res);
				setUsers(res);
				setUser(res[0]);
			})
			.catch(console.log);

	const loadAllClasses = () =>
		fetchApi(API_CLASSES, undefined, 'GET')
			.then(jsonToArray(jsonToClass))
			.then(res => {
				console.log('classes', res);
				setClasses(res);
			})
			.catch(console.log);

	const loadAllQuizzes = () =>
		fetchApi(API_QUIZZES, undefined, 'GET')
			.then(jsonToArray(jsonToQuiz))
			.then(res => {
				console.log('quizzes', res);
				setQuizzes(res);
			})
			.catch(console.log);

	// load all datas
	// this is a very simple
	// remote data connection
	// inspiration from : https://reactjs.org/docs/faq-ajax.html
	useEffect(() => {
		loadAllUsers();
		loadAllClasses();
		loadAllQuizzes();
	}, []);

	const data: AppData = {
		user, users, register, login, logout,
		classes, addClass, deleteClass, gotoClass,
		quizzes, addQuiz, deleteQuiz, gotoQuiz,
		addQuestion,
		loadAllUsers, loadAllClasses, loadAllQuizzes,
	};


	return <AppDataContext.Provider value={data} children={children}/>;
};
