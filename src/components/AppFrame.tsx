import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Container } from '@material-ui/core';

import { Header, Footer, } from '.';

export function AppFrame(props: any) {
	const { children, title } = props;
	const { back, free } = props;

	const inner = (<>
		<Header title={title} back={back} />
		<main style={{ flex: 1 }}>
			{children}
		</main>
		<Footer />
	</>);

	return (<>
		{/* <NProgressBar /> */}
		< CssBaseline />
		{free ? inner :
			<Container maxWidth="lg">{inner}</Container>
		}
	</>);
}

AppFrame.defaultProps = {
	back: false,
	free: false,
}
