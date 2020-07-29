import React from 'react';

import {Container, Header, Footer,} from '.';

export function AppFrame(props: { children: any, title?: String, back?: boolean, free?: boolean }) {
	const {children, title} = props;
	const {back, free} = props;

	const inner = (<>
		<Header title={title} back={back}/>
		<main style={{flex: 1}}>
			{children}
		</main>
		<Footer/>
	</>);

	return (<>
		{free ? inner :
			<Container /*maxWidth="lg"*/>{inner}</Container>
		}
	</>);
}

AppFrame.defaultProps = {
	back: false,
	free: false,
}
