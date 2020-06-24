import React from 'react';

// https://reacttraining.com/blog/using-hooks-in-classes/

export const useMousePosition = (listen: boolean = true) => {
	let [pos, setPos] = React.useState({ x: 0, y: 0 });
	React.useEffect(() => {
		let handler = (event: any) => setPos({ x: event.clientX, y: event.clientY });
		if (listen) window.addEventListener('mousemove', handler);
		else window.removeEventListener('mousemove', handler);
		return () => window.removeEventListener('mousemove', handler);
	}, [listen]);
	return pos
}

export const MousePosition = ({ listen = true, children }: any) => {
	let pos = useMousePosition(listen);
	return children(pos);
}
