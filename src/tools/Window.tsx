import React from 'react';

export const useWindowTitle = (title: string) => {
	return React.useEffect(() => {
		document.title = title;
	}, [title]);
}

export const WindowTitle = ({ title }: any) => {
	useWindowTitle(title);
	return undefined;
}

const calculateWindowSize = () => ({
	width: window.innerWidth,
	height: window.innerHeight,
});

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = React.useState(calculateWindowSize());
	const update = () => setWindowSize(calculateWindowSize());
	React.useEffect(() => {
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	});
	return windowSize;
};

export const WindowSize = ({ children }: any) => {
	let size = useWindowSize();
	return children(size);
}
