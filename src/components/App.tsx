import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {MyAppRouter} from '../pages';

export const App = () => {
	return (<>
		<React.StrictMode>
			<Router>
				<MyAppRouter/>
			</Router>
		</React.StrictMode>
	</>);
}
