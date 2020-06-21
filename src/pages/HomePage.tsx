import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import * as Material from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { Paper } from '@material-ui/core';

import { AppFrame, Footer, } from '../components';

import { homePageStyle } from '../styles';
const useStyles = makeStyles(homePageStyle as any);

export function HomePage(props: any) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<AppFrame title="Learnian">
			<Paper >
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div>
						<div className={classes.container}>
							<div className={classes.description}>
								<p>
									An artist of considerable range, Chet Faker — the name taken by
									Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
									and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Paper>
			<Footer />

		</AppFrame>
	);
}
