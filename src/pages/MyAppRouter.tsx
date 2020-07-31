import React from 'react';
import {Switch, Route,} from 'react-router-dom';

import {
	HomePage,
	AboutPage,
	ClassListPage,
	UserListPage,
	AccountPage,
	ClassRoomPage,
} from '.';

export const MyAppRouter = () => (<>
	<Switch>
		<Route path='/' exact component={HomePage}/>
		<Route path='/account' component={AccountPage}/>
		<Route path='/about' component={AboutPage}/>
		<Route path='/classroom' component={ClassRoomPage}/>

		<Route path='/classes' component={ClassListPage}/>
		<Route path='/users' component={UserListPage}/>
		<Route path='*'>
			<div>404</div>
		</Route>
	</Switch>
</>);
