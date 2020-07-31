import React from 'react';
import {useHistory} from "react-router-dom";

import {AppFrame,} from '../components';

export const HomePage = () => {
	const history = useHistory();

	return (<AppFrame>
		<div className='container-fluid'>
			<ul>
				<li>
					<button onClick={() => history.push('/users')}>Users</button>
				</li>
				<li>
					<button onClick={() => history.push('/classes')}>Classes</button>
				</li>
			</ul>
		</div>
	</AppFrame>);
}
