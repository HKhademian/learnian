import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, useTheme, makeStyles } from '@material-ui/core/styles';
import * as Material from '@material-ui/core';
import * as Icons from '@material-ui/icons';

import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from '@material-ui/core';

import { headerStyle } from '../styles/components/header';
const useStyles = makeStyles(headerStyle as any);

export const Header = (props: { title: string, sections?: any[] }) => {
	const classes = useStyles();
	const { title, sections } = props;
	return (
		<React.Fragment>
			<header>
				<Toolbar className={classes.toolbar}>
					<Button size="small">Subscribe</Button>
					<Typography component="h2" variant="h5" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
						{title}
					</Typography>
					<Button variant="outlined" size="small">Account</Button>
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
		</React.Fragment>
	);
};
