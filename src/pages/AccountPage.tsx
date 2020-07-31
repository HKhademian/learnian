import React from 'react';

import {AppFrame} from '../components';
import {AppDataContext} from "../data";
import {AccountWidget} from "../components/AccountWidget";


export const AccountPage = () => {
	const appData = React.useContext(AppDataContext);

	return (<AppFrame>
		<AccountWidget {...{appData}} />
	</AppFrame>);
}
