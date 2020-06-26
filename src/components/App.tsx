import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import mainColor from '@material-ui/core/colors/deepPurple';
import { ThemeProvider } from '@material-ui/core';

import { Routes } from '../pages';

const theme = createMuiTheme({
	palette: {
		primary: mainColor,
	},
});

export const App = () => {
	return (<>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes />
				</Router>
			</ThemeProvider>
		</React.StrictMode>
	</>);
}
