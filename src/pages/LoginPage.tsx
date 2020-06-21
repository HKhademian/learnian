import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import * as Material from '@material-ui/core';
import * as Icons from '@material-ui/icons';
import { Paper } from '@material-ui/core';

import { AppFrame, Footer, } from '../components';

import { loginPageStyle } from '../styles';
const useStyles = makeStyles(loginPageStyle as any);

export function LoginPage() {
	return (
		<div className='LoginPage'>
			<h4>This is LoginPage</h4>
		</div>
	);
}
