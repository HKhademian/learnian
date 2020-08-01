import React, {useContext, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {AppDataContext, AppDataProvider} from '../data';
import {MyAppRouter} from '../pages';

export const App = () => {
	return (<>
		<React.StrictMode>
			<Router>
				<AppDataProvider>
					<MyAppRouter/>
				</AppDataProvider>
			</Router>
		</React.StrictMode>
	</>);
}
