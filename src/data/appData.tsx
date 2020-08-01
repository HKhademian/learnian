import React, {useEffect, useState} from 'react';
import {Class, Question, Quiz, User} from './';
import {useHistory} from "react-router-dom";
import config from '../config';

export type AppData = {
	user: User | undefined,
	setUser: (item: User | undefined) => void,

	users: User[],
	setUsers: (items: User[]) => void,

	classes: Class[],
	setClasses: (items: Class[]) => void,

	quizzes: Quiz[],
	setQuizzes: (items: Quiz[]) => void,

	register: (username: string, password: string, title: string) => any,
	login: (username: string, password: string) => any,
	logout: () => any,
};

export const AppDataContext = React.createContext<AppData>(undefined as any as AppData);

export const AppDataProvider = ({children}: { children: any }) => {
	const history = useHistory();

	const defaultUser = config.defaults.users[3];

	const [user, setUser] = useState<User | undefined>(defaultUser);
	const [users, setUsers] = useState(config.defaults.users);
	const [classes, setClasses] = useState(config.defaults.classes);
	const [quizzes, setQuizzes] = useState(config.defaults.quizzes);

	const register = (username: string, password: string, title: string) => {
		let user = users.find((it) => it.username === username);
		if (user) return alert('Username already exists!');
		let newUser = new User(username, title, password);
		setUsers([...users, newUser]);
		setUser(newUser);
		history.replace('/');
		return true;
	}

	const login = (username: string, password: string) => {
		let user = users.find((it) => it.username === username);
		if (!user) return alert('User not found!');
		if (!user.login(password)) return alert('password is incorrect.');
		setUser(user);
		history.replace('/');
		return true;
	}

	const logout = () => {
		setUser(undefined);
		history.replace('/');
		return true;
	}

	const data: AppData = {
		user, setUser,
		users, setUsers,
		classes, setClasses,
		quizzes, setQuizzes,
		register,
		login,
		logout
	};

	// load all datas
	// this is a very simple
	// remote data connection
	// there is no real data in there
	// inspiration from : https://reactjs.org/docs/faq-ajax.html
	useEffect(() => {
		let loadedUsers: User[] = [];
		let loadedClasses: Class[] = [];
		let loadedQuizzes: Quiz[] = [];

		fetch('http://localhost:8000/api/users')
			.then(res => res.json())
			.then(res => {
				console.log(res);
				return res.map((data: any) => {
					return new User(data.username, data.title, data.password)
				});
			})
			.then(res => {
				console.log('users', res);
				loadedUsers = res;
				setUsers(res);
				setUser(res[0]);
			})
			.catch(console.log);

		fetch('http://localhost:8000/api/classes')
			.then(res => res.json())
			.then(res => {
				console.log(res);
				return res.map((data: any) => {
					const owner = loadedUsers.find(it => it.username === data.ownerId)!!;
					return new Class(data.id, data.title, data.desc, data.studentCount, owner);
				});
			})
			.then(res => {
				console.log('classes', res);
				loadedClasses = res;
				setClasses(res);
			})
			.catch(console.log);

		fetch('http://localhost:8000/api/quizzes')
			.then(res => res.json())
			.then(res => {
				console.log(res);
				return res.map((data: any) => {
					const clazz = loadedClasses.find(it => it.id === data.classId)!!;
					const questions = (data.questions as any[]).map((q: { ask: string, answer: number, options: string[] }) =>
						new Question(q.ask, q.answer, ...q.options));
					return new Quiz(data.id, data.title, data.time, data.point, clazz, ...questions);
				});
			})
			.then(res => {
				console.log('quizzes', res);
				loadedQuizzes = res;
				setQuizzes(res);
			})
			.catch(console.log);

	}, []);

	return <AppDataContext.Provider value={data} children={children}/>;
};
