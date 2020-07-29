import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import CanvasDraw from 'react-canvas-draw';

const colors = {
	"Black": "#000000",
	"White": "#ffffff",
	// "Red": MaterialColors.red[500],
	// "Blue": MaterialColors.blue[500],
	// "Green": MaterialColors.green[500],
	// "Yellow": MaterialColors.yellow[500],
	// "Orange": MaterialColors.orange[500],
	// "pink": MaterialColors.pink[500],
	// "purple": MaterialColors.purple[500],
	// "cyan": MaterialColors.cyan[500],
	// "teal": MaterialColors.teal[500],
	// "lime": MaterialColors.lime[500],
	// "brown": MaterialColors.brown[500],
	// "grey": MaterialColors.grey[500],
};

const sizes = {
	"extra thin": 1,
	"thin": 2,
	"medium": 3,
	"bold": 4,
	"extra bold": 5
};

const whiteBoardStyle = {
	choice: {
		width: "25px", height: "25px", margin: 5,
		backgroundColor: 'black', display: "inline-block",
		border: "3px solid lightgrey",
	},
	selected: {
		borderColor: "gold",
	},
};

export const WhiteBoard = (props) => {
	const classes = whiteBoardStyle;
	const [options, setOptions] = React.useState({
		...props,
		brushColor: Object.entries(colors)[0][1],
		brushRadius: Object.entries(sizes)[0][1],
		lazyRadius: 0,
	});
	const setColor = (color) => setOptions({ ...options, brushColor: color });
	const setSize = (size) => setOptions({ ...options, brushRadius: size });

	return (
		<>
			<table><tr>
				<td>Brush Color: </td>
				{Object.entries(colors).map(([name, color]) => (
					<td
						title={name}
						key={color}
						onClick={() => setColor(color)}
						className={classNames(classes.choice, { [classes.selected]: color === options.brushColor })}
						style={{ backgroundColor: color }}
					/>
				))}
			</tr></table>

			<table><tr>
				<td>Brush Radius: </td>
				{Object.entries(sizes).map(([name, size]) => (
					<td
						title={name}
						key={size}
						onClick={() => setSize(size)}
						className={classNames(classes.choice, { [classes.selected]: size === options.brushRadius })}
						style={{ backgroundColor: options.brushColor, width: 10 + 5 * size }}
					/>
				))}
			</tr></table>

			<div>
				<CanvasDraw style={{
					textAlign: "center",
				}} {...options} />
			</div>
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
