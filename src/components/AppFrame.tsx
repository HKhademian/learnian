import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { Header, Footer, } from '.';

export function AppFrame(props: any) {
	const { children, title, whiteboard, container } = props;

	const inner = (<>
		<Header title={title} whiteboard={whiteboard} />
		<main style={{ flex: 1 }}>
			{children}
		</main>
		<Footer />
	</>);

	return (<>
		{/* <NProgressBar /> */}
		< CssBaseline />
		{!container ? inner :
			<Container maxWidth="lg">{inner}</Container>
		}
	</>);
}

AppFrame.defaultProps = {
	whiteboard: true,
	container: true,
}
