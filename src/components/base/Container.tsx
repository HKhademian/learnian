import React from 'react';

export const Container = (props: { children: any }) => {
	return (<>
		<div className=".container">
			{props.children}
		</div>
	</>);
}
