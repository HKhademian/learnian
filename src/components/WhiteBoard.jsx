import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import CanvasDraw from 'react-canvas-draw';

import * as MaterialColors from '@material-ui/core/colors';

// const colors = ["#f96", "#f63", "#f30"];
const colors = [
	"#000", "#fff", // "#333", "#666", "#999",
	// "#f00", "#f33", "#f66", "#f99",
	// "#0f0", "#3f3", "#6f6", "#9f9",
	// "#00f", "#33f", "#66f", "#99f",
	...[
		MaterialColors.red, MaterialColors.pink, MaterialColors.purple,
		MaterialColors.blue, MaterialColors.cyan, MaterialColors.teal,
		MaterialColors.green, MaterialColors.lime, MaterialColors.yellow,
		MaterialColors.orange, MaterialColors.brown, MaterialColors.grey,
	].map(c => c[500]).flat(),
];

const sizes = [1, 2, 3, 4, 5];

const whiteBoardStyle = {
	choice: {
		width: "25px", height: "25px", margin: 5,
		backgroundColor: 'black', display: "inline-block",
		border: "3px solid lightgrey",
		backgroundColor: "white",
	},
	selected: {
		borderColor: "gold",
	},
};
const useStyles = makeStyles(whiteBoardStyle);

export const WhiteBoard = () => {
	const classes = useStyles();
	const [options, setOptions] = React.useState({
		...CanvasDraw.defaultProps,
		brushColor: colors[0],
		brushRadius: sizes[0],
		lazyRadius: 0,
		canvasWidth: window.innerWidth * 0.5,
	});
	const setColor = (color) => setOptions({ ...options, brushColor: color });
	const setSize = (size) => setOptions({ ...options, brushRadius: size });

	return (
		<>
			Brush Color: <table><tr>
				{colors.map((color) => (
					<td
						onClick={() => setColor(color)}
						key={color}
						className={classNames(classes.choice, { [classes.selected]: color == options.brushColor })}
						style={{ backgroundColor: color }}
					/>
				))}
			</tr></table>
			Brush Radius: <table><tr>
				{sizes.map((size) => (
					<td
						onClick={() => setSize(size)}
						key={size}
						className={classNames(classes.choice, { [classes.selected]: size == options.brushRadius })}
						style={{ backgroundColor: options.brushColor, width: 20 + 5 * size }}
					/>
				))}
			</tr></table>
			<CanvasDraw style={{
				display: "inline-block",
				textAlign: "center",
			}} {...options} />
		</>
	);
};

WhiteBoard.propTypes = CanvasDraw.propTypes;
WhiteBoard.defaultProps = CanvasDraw.defaultProps;


/// NOTE: I can use bare canvas like:
/// https://dev.to/ankursheel/react-component-to-fraw-on-a-page-using-hooks-and-typescript-2ahp
/// or
/// https://medium.com/better-programming/add-an-html-canvas-into-your-react-app-176dab099a79
/// but I think this CanvasDraw compoent is good enaugh to just use it in this stage
