import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Paper, } from '@material-ui/core';

import { WhiteBoard, Streaming, } from '../components';
import { useWindowSize, } from '../tools';

export const ClassPage = () => {
	const history = useHistory();
	const windowSize = useWindowSize();

	const onClickBack = () => history.goBack(); // history.replace('/'); //

	return (<>
		<Paper>
			<Button variant="outlined" color="primary" onClick={onClickBack}>Back</Button>
			<table><tbody><tr>
				<td>
					<WhiteBoard canvasWidth={windowSize.width * 0.69} canvasHeight={windowSize.height - 150} />
				</td>
				<td>
					<Streaming
						height={500}
						width={windowSize.width * 0.29} />
				</td>
			</tr></tbody></table>
		</Paper>
	</>);
}
