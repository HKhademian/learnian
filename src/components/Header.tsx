import React from 'react';
import { useHistory, } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from '@material-ui/core';

import { headerStyle } from '../styles/components/header';
const useStyles = makeStyles(headerStyle as any);

export const Header = (props: { title: string, whiteboard?: boolean, sections?: any[] }) => {
	const history = useHistory();
	const classes = useStyles();
	const { title, whiteboard, sections } = props;

	const onClickLogo = () => history.push('/');
	const onClickAccount = () => history.push('/signup');
	const onClickClass = () => history.push('/class');

	return (<>
		<header>

			<Toolbar className={classes.toolbar}>
				{whiteboard &&
					<Button variant="outlined" size="small" onClick={onClickClass}>Whiteboard</Button>
				}

				<Typography onClick={onClickLogo} component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
					{title}
				</Typography>

				<Button variant="outlined" size="small" onClick={onClickAccount}>Account</Button>
			</Toolbar>

			{sections && (
				<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
					{sections.map((section: any) => (
						<Link noWrap color="inherit" key={section.title} variant="body2" href={section.url} className={classes.toolbarLink}>
							{section.title}
						</Link>
					))}
				</Toolbar>
			)}

		</header>
	</>);
};
