import React from 'react';
import {useHistory} from "react-router-dom";

import {AppDataContext, Class, User,} from '../data';
import {AppFrame,} from '../components';

export const UserListPage = () => {
	const history = useHistory();
	const appData = React.useContext(AppDataContext);
	const onAttend = (cls: Class) => history.push('/classroom/' + cls.id);
	const logout = () => appData.logout();

	const InnerUserWidget = ({user}: { user: User }) => {
		const InnerClassWidget = ({item}: { item: Class }) => (<>
			<a className='btn btn-link' onClick={() => onAttend(item)}>{item.title}</a>
		</>);

		let classes = appData.classes.filter((it) => it.owner === user);
		return (<>
			<span>{user.title}</span>
			{classes && classes.length > 0 && <> :
				<ol>{classes.map((cls) => <li><InnerClassWidget item={cls}/></li>)}</ol>
			</>}
		</>);
	};

	if (!appData.user) return <div>Please Login to see this page</div>;

	return (<AppFrame>
		<div className='container'>
			<h4>Hi {appData.user.title}</h4>
			<button className='btn btn-danger' onClick={logout}>Logout</button>
		</div>
		<hr/>

		<h3>Users and their classes</h3>
		<ul>{appData.users.map((user) => (<li><InnerUserWidget user={user}/></li>))}</ul>
	</AppFrame>);
}