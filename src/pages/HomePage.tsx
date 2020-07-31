import React from 'react';
import {useHistory} from "react-router-dom";

import {AppFrame,} from '../components';

export const HomePage = () => {
	const history = useHistory();

	return (<AppFrame>
		<div className='container-fluid'>
			<ul>
				<li><a href='/users'>Users</a></li>
				<li><a href='/classes'>Classes</a></li>
			</ul>
		</div>
	</AppFrame>);
}
