import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import mainColor from '@material-ui/core/colors/blueGrey';
import { ThemeProvider } from '@material-ui/core';
import {
	HomePage,
	AboutPage,
	ClassPage,
	SignUpPage,
	SignInPage,
} from '../pages';

const theme = createMuiTheme({
	palette: {
		primary: mainColor,
	},
});

export const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<Switch >
						<Route path='/signup' component={SignUpPage} />
						<Route path='/signin' component={SignInPage} />

						<Route path='/' component={HomePage} />
					</Switch>
				</Router>
			</ThemeProvider>
		</>
	);
}
