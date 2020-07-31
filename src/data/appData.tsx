import React, {useState} from 'react';
import {Class, Quiz, User} from './';
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

	register: (username: string, password: string, title: string) => any,
	login: (username: string, password: string) => any,
	logout: () => any,
};

export const AppDataContext = React.createContext<AppData>(undefined as any as AppData);

export const AppDataProvider = (props: any) => {
	const history = useHistory();
	const [user, setUser] = useState(undefined as (User | undefined));
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

	const data: AppData = {user, setUser, users, setUsers, classes, setClasses, quizzes, register, login, logout};

	return <AppDataContext.Provider value={data} children={props.children}/>;
};
