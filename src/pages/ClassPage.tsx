import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { WhiteBoard, Streaming, AppFrame, } from '../components';
import { useWindowSize, } from '../tools';

const classPageStyle = {
	streaming: {
		zIndex: "1000",
		position: "fixed",
		right: 0,
		bottom: 0,
		border: "1px solid",
		borderRadius: "10px 0 0 0",
	},
	whiteboard: {

	},
};

export const ClassPage = () => {
	const history = useHistory();
	const classes = classPageStyle;
	const windowSize = useWindowSize();
	const [largeVideo, setLargeVideo] = useState(false);

	const onClickVideo = () => setLargeVideo(!largeVideo);

	const videoSize = {
		width: Math.min(largeVideo ? 500 : 250, windowSize.width * 0.95),
		height: undefined,
	};
	const whiteboardSize = {
		width: windowSize.width * 0.99,
		height: windowSize.height - 150,
	};

	return (<>
		<AppFrame back free>
			<Streaming className={classes.streaming} onClick={onClickVideo} width={videoSize.width} height={videoSize.height} />
			<WhiteBoard className={classes.whiteboard} canvasWidth={whiteboardSize.width} canvasHeight={whiteboardSize.height} />
		</AppFrame>
	</>);
}
