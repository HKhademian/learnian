import React from 'react';
import { useHistory, } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

import config from '../config';

import { topBarStyle as style } from '../styles';
const useStyles = makeStyles(style as any);

export const TopBar = (props: { title: string, back?: boolean, sections?: any[] }) => {
	const history = useHistory();
	const classes = useStyles();
	const { title, back } = props;

	const onClickLogo = () => history.push('/');
	const onClickBack = () => history.goBack();
	const onClickAccount = () => history.push('/signup');
	const onClickClass = () => history.push('/class');

	return (<>
		<Toolbar className={classes.toolbar}>
			{back ?
				<Button variant="outlined" size="small" onClick={onClickBack}>Back</Button>
				:
				<Button variant="contained" size="small" onClick={onClickClass}>Whiteboard</Button>
			}

			<Typography onClick={onClickLogo} component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
				{title ?? config.title}
			</Typography>

			<Button variant="outlined" size="small" onClick={onClickAccount}>Account</Button>
		</Toolbar>

	</>);
};
