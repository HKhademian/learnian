/// SOURCE: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-up
import React from 'react';

export const Copyright = () => {
	return (<>
		 {/*<Typography variant="body2" color="textSecondary" align="center">*/}
		{'Copyright © '}
		<a color="inherit" href="//hkhademian.ir/" target="_blank">
			Hossain Khademian
		</a>{' '}
		{new Date().getFullYear()}{'.'}
		{/*</Typography>*/}
	</>);
}
