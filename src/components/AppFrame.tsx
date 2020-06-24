import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import { withStyles, useTheme, makeStyles } from '@material-ui/core/styles';
// import * as Material from '@material-ui/core';
// import * as Icons from '@material-ui/icons';

import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { Header, Footer, } from '.';

export function AppFrame(props: any) {
	const { children, title, whiteboard, container } = props;

	const inner = (<>
		<Header title={title} whiteboard={whiteboard} />
		<main style={{ flex: 1 }}>{children}</main>
		<Footer />
	</>);

	return (
		<>
			{/* <NProgressBar /> */}
			< CssBaseline />
			{!container ? inner :
				<Container maxWidth="lg">{inner}</Container>
			}
		</>
	);
}

AppFrame.defaultProps = {
	whiteboard: true,
	container: true,
}
