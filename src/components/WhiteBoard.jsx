import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import CanvasDraw from 'react-canvas-draw';

const colors = {
	"Black": "#000000",
	"White": "#ffffff",
	"Red": "#f44336",
	"Blue": "#2196f3",
	"Green": "#4caf50",
	"Yellow": "#ffeb3b",
	"Orange": "#ff9800",
	"pink": "#e91e63",
	"purple": "#9c27b0",
	"cyan": "#00bcd4",
	"teal": "#009688",
	"lime": "#cddc39",
	"brown": "#795548",
	"grey": "#333333",
};

const sizes = {
	"extra thin": 1,
	"thin": 2,
	"medium": 3,
	"bold": 4,
	"extra bold": 5
};

const style = {
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
	const [options, setOptions] = React.useState({
		...props,
		brushColor: Object.entries(colors)[0][1],
		brushRadius: Object.entries(sizes)[0][1],
		lazyRadius: 0,
	});
	const setColor = (color) => setOptions({...options, brushColor: color});
	const setSize = (size) => setOptions({...options, brushRadius: size});

	return (
		<>
			<table>
				<tr>
					<td>Brush Color:</td>
					{Object.entries(colors).map(([name, color]) => (
						<td
							title={name}
							key={color}
							onClick={() => setColor(color)}
							style={{
								...style.choice,
								...(color === options.brushColor && style.selected),
								backgroundColor: color,
							}}
						/>
					))}
				</tr>
			</table>

			<table>
				<tr>
					<td>Brush Radius:</td>
					{Object.entries(sizes).map(([name, size]) => (
						<td
							title={name}
							key={size}
							onClick={() => setSize(size)}
							style={{
								...style.choice,
								...(size === options.brushRadius && style.selected),
								backgroundColor: options.brushColor,
								width: 10 + 5 * size,
							}}
						/>
					))}
				</tr>
			</table>

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
