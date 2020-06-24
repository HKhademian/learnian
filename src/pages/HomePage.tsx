import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import * as Material from '@material-ui/core';
// import * as Icons from '@material-ui/icons';
// import { Paper } from '@material-ui/core';

import { AppFrame, Footer, WhiteBoard } from '../components';

// import { homePageStyle } from '../styles';
// const useStyles = makeStyles(homePageStyle as any);

export function HomePage(props: any) {
	// const classes = useStyles();
	// const { ...rest } = props;
	return (
		<AppFrame title="Learnian">
			<div>

				<WhiteBoard brushColor={"#663399"} canvasWidth={window.innerWidth/2} canvasHeight={500} />

			</div>
			<Footer />

		</AppFrame>
	);
}
