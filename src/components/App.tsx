import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import mainColor from '@material-ui/core/colors/blueGrey';
import { ThemeProvider } from '@material-ui/core';
import * as Pages from '../pages'

const theme = createMuiTheme({
	palette: {
		primary: mainColor,
	},
});

export const App = () => {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Router>
					<Switch >
						<Route path='/about' component={Pages.AboutPage} />
						<Route path='/login' component={Pages.LoginPage} />
						<Route path='/register' component={Pages.RegisterPage} />
						<Route path='/' component={Pages.HomePage} />
					</Switch>
				</Router>
			</ThemeProvider>
		</React.Fragment>
	);
}
