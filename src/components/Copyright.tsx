/// SOURCE: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up
import React from 'react';

import { Link, Typography, } from '@material-ui/core';

export const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="//hkhademian.ir/" target="_blank">
				Hossain Khademian
      </Link>{' '}
			{new Date().getFullYear()}{'.'}
		</Typography>
	);
}
