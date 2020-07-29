import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import {
	HomePage,
	AboutPage,
	ClassPage,
	SignUpPage,
	SignInPage,
} from '.';

export const MyAppRouter = () => (<>
	<Switch >
		<Route path='/' exact component={HomePage} />
		<Route path='/about' component={AboutPage} />
		<Route path='/class' component={ClassPage} />
		<Route path='/signup' component={SignUpPage} />
		<Route path='/signin' component={SignInPage} />
		<Route path='*'>
			<div>404</div>
		</Route>
	</Switch>
</>);
