import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import {AppFrame, Streaming, WhiteBoard,} from '../components';
import {useWindowSize} from "../tools";
import {AppDataContext} from "../data";
import {ClassCard} from "../components/ClassCard";

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
	type ClassRoomPageParams = { id: string };

	const appData = React.useContext(AppDataContext);
	const {id} = useParams<ClassRoomPageParams>();

	const windowSize = useWindowSize();
	const whiteboardSize = {
		width: 'auto', //windowSize.width * 0.60,
		height: windowSize.height * 0.85,
	};

	const [largeVideo, setLargeVideo] = useState(false);
	const videoSize = {
		width: Math.min(largeVideo ? 500 : 250, windowSize.width * 0.95),
		height: undefined,
	};

	const currentClass = id && id.length && appData.classes.find(it => it.id === id);

	const onClickVideo = () => setLargeVideo(!largeVideo);

	return (<AppFrame>

		{currentClass && <ClassCard single item={currentClass}/>}

		<WhiteBoard canvasWidth={whiteboardSize.width} canvasHeight={whiteboardSize.height}/>

		<Streaming style={style.streaming} onClick={onClickVideo} width={videoSize.width} height={videoSize.height}/>

	</AppFrame>);
}
