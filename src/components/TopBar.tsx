import React from 'react';
import {useHistory} from "react-router-dom";

import config from '../config';

const style = {
	toolbar: {},
	toolbarTitle: {},
};

export const TopBar = (props: { title: string, back?: boolean, sections?: any[] }) => {
	const history = useHistory();
	const {title, back} = props;

	const onClickLogo = () => history.push('/');
	const onClickBack = () => history.goBack();
	const onClickAccount = () => history.push('/signup');
	const onClickClass = () => history.push('/class');

	return (<>
		<div style={style.toolbar}>
			{back ?
				<a onClick={onClickBack}>Back</a>
				:
				<a onClick={onClickClass}>Whiteboard</a>
			}

			<h5 onClick={onClickLogo} style={style.toolbarTitle}>
				{title ?? config.title}
			</h5>

			<a onClick={onClickAccount}>Account</a>
		</div>

	</>);
};
