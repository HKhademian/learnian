import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, useTheme, makeStyles } from '@material-ui/core/styles';
import * as Material from '@material-ui/core';
import * as Icons from '@material-ui/icons';

import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { Header } from './Header';
import { Footer } from './Footer';

export function AppFrame(props: any) {
	const { children, title } = props;
	return (
		<Container maxWidth="lg">
			{/* <NProgressBar /> */}
			<CssBaseline />
			<Header title={title} />
			<main>{children}</main>
		</Container>
	);
}
