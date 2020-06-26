import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, makeStyles } from '@material-ui/core';

import { WhiteBoard, Streaming, } from '../components';
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
const useStyles = makeStyles(classPageStyle as any);

export const ClassPage = () => {
	const history = useHistory();
	const classes = useStyles();
	const windowSize = useWindowSize();
	const [largeVideo, setLargeVideo] = useState(false);

	const onClickBack = () => history.goBack();
	const onClickVideo = () => setLargeVideo(!largeVideo);

	const videoWidth = Math.min(largeVideo ? 500 : 250, windowSize.width * 0.95)

	return (<>
		<Button variant="outlined" color="primary" onClick={onClickBack}>Back</Button>
		<Streaming className={classes.streaming} onClick={onClickVideo} width={videoWidth} />
		<WhiteBoard
			className={classes.whiteboard}
			canvasWidth={windowSize.width * 0.99}
			canvasHeight={windowSize.height - 150}
		/>
	</>);
}
