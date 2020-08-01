import React from 'react';
import {useHistory} from "react-router-dom";

import {AppDataContext, Class, User,} from '../data';
import {AppFrame,} from '../components';

export const UserListPage = () => {
	const history = useHistory();
	const appData = React.useContext(AppDataContext);
	const onAttend = (cls: Class) => history.push('/classroom/' + cls.id);

	const InnerUserWidget = ({user}: { user: User }) => {
		const InnerClassWidget = ({item}: { item: Class }) => (<>
			<a className='btn btn-link' onClick={() => onAttend(item)}>{item.title}</a>
		</>);

		let classes = appData.classes.filter((it) => it.ownerId === user.id);
		return (<>
			<span>{user.title}</span>
			{classes && classes.length > 0 && <> :
				<ol>{classes.map((cls) => <li><InnerClassWidget item={cls}/></li>)}</ol>
			</>}
		</>);
	};

	if (!appData.user) return <div>Please Login to see this page</div>;

	return (<AppFrame>
		<h3>Users and their classes</h3>
		<hr/>
		<ul>{appData.users.map((user) => (<li><InnerUserWidget user={user}/></li>))}</ul>
	</AppFrame>);
}
