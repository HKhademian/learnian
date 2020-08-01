import React from 'react';
import {Switch, Route,} from 'react-router-dom';

import {
	HomePage,
	AboutPage,

	ClassListPage,
	ClassPage,
	ClassRoomPage,

	QuizListPage,
	QuizPage,

	UserListPage,
	AccountPage,
} from '.';

export const MyAppRouter = () => (<>
	<Switch>
		<Route path='/' exact component={HomePage}/>
		<Route path='/about' component={AboutPage}/>
		<Route path='/account' component={AccountPage}/>
		<Route path='/users' component={UserListPage}/>

		<Route path='/classes' component={ClassListPage}/>
		<Route path='/class/:id' component={ClassPage}/>

		<Route path='/quizzes' component={QuizListPage}/>
		<Route path='/quiz/:id' component={QuizPage}/>

		<Route path='/classroom/:id' component={ClassRoomPage}/>
		<Route path='/classroom' component={ClassRoomPage}/>

		<Route path='*'>
			<div>404</div>
		</Route>
	</Switch>
</>);
