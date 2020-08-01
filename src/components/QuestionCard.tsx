import React, {useState} from "react";
import {Question} from "../data";

export const QuestionCard = ({index, item}: { index: number, item: Question }) => {
	const [select, setSelect] = useState(-1);
	return (<>
		<form className="card mb-3">
			<h5 className="card-header">Question #{index + 1}</h5>
			<div className="card-body">
				<div className='card-text'>{item.ask}</div>
			</div>
			<div className="btn-group-vertical list-group list-group-flush " role="group">
				{item.options.map((it, index) =>
					<button type="button" onClick={() => setSelect(index)}
									className={"text-left btn " + (index === select && ' btn-secondary')}>{index + 1}) {it}</button>
				)}
			</div>
		</form>
	</>);
}
