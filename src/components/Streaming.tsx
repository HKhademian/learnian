import React from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: "user",
};

export const Streaming = (props: any) => {
	const webcamRef = React.useRef(undefined as any);

	// const capture = React.useCallback(() => {
	// 	const imageSrc = webcamRef.current.getScreenshot();
	// }, [webcamRef]);

	return (<>
		<Webcam
			audio={false}
			ref={webcamRef}
			screenshotFormat="image/jpeg"
			videoConstraints={videoConstraints}
			{...props} />
	</>);
};
