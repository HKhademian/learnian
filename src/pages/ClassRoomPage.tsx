import React, {useState} from 'react';

import {AppFrame, Streaming, WhiteBoard,} from '../components';
import {useWindowSize} from "../tools";

const style = {
	streaming: {
		zIndex: "1000",
		position: "fixed",
		left: 0,
		bottom: 0,
		border: "1px solid",
		borderRadius: "0 10px 0 0",
	},
	whiteboard: {},
};

export const ClassRoomPage = () => {
	const windowSize = useWindowSize();
	const [largeVideo, setLargeVideo] = useState(false);

	const onClickVideo = () => setLargeVideo(!largeVideo);

	const videoSize = {
		width: Math.min(largeVideo ? 500 : 250, windowSize.width * 0.95),
		height: undefined,
	};
	const whiteboardSize = {
		width: 'auto', //windowSize.width * 0.60,
		height: windowSize.height * 0.75,
	};

	return (<AppFrame>

		<WhiteBoard canvasWidth={whiteboardSize.width} canvasHeight={whiteboardSize.height}/>

		<Streaming style={style.streaming} onClick={onClickVideo} width={videoSize.width} height={videoSize.height}/>

	</AppFrame>);
}
