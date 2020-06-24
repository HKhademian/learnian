import React, { useState } from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import * as Material from '@material-ui/core';
import * as Icons from '@material-ui/icons';

import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';

import { footerStyle } from '../styles/components/footer';
const useStyles = makeStyles(footerStyle as any);

export const Footer = (props: any) => {
	const classes = useStyles();
	const [value, setValue] = useState();

	return (
		<React.Fragment>
			<footer>
				<BottomNavigation showLabels value={value} onChange={(event, newValue) => setValue(newValue)} className={classes.root} >
					<BottomNavigationAction label="Recents" icon={<Icons.Restore />} />
					<BottomNavigationAction label="Favorites" icon={<Icons.Favorite />} />
					<BottomNavigationAction label="Nearby" icon={<Icons.LocationOn />} />
				</BottomNavigation>
			</footer>
		</React.Fragment>
	);
};

