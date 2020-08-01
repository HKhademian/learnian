import React from "react";
import {AppDataContext, Quiz} from "../data";

export const QuizCard = ({item}: { item: Quiz }) => {
	const appData = React.useContext(AppDataContext);

	const clazz = appData.classes.find(it => it.id === item.classId);
	const owner = appData.users.find(it => it.id === clazz?.ownerId);

	const onAttend = (item: Quiz) => appData.gotoQuiz(item.id);
	const onDeleteItem = (item: Quiz) => {
		if (owner !== appData.user?.id) return alert('only owner can delete a quiz!');
		appData.deleteQuiz(item.id);
	};

	return (<>
		<div className="card mb-3">
			<div className="card-body h-100 d-flex flex-column">
				<h5 className="card-title">{item.title}</h5>
				<div className='card-text d-table'>
					<div className='d-table-row'>
						<div className='d-table-cell'><strong>Teacher: </strong><em> {owner?.title}</em></div>
						<div className='d-table-cell'><strong>Class: </strong><em> {clazz?.title}</em></div>
						<div className='d-table-cell'><strong>Questions: </strong><em> {item.questions.length}</em></div>
					</div>
					<div className='d-table-row'>
						<div className='d-table-cell'><strong>Time: </strong><em> {item.time}</em></div>
						<div className='d-table-cell'><strong>Point: </strong><em> {item.points}</em></div>
					</div>
				</div>
				<div className="btn-group align-self-stretch" role="group">
					<button type="button" className="btn btn-info" onClick={() => onAttend(item)}>Take This Quiz</button>
					{(clazz?.ownerId === appData.user?.id) && (
						<button type="button" className="btn btn-danger" onClick={() => onDeleteItem(item)}>
							Delete Quiz
						</button>
					)}
				</div>
			</div>
		</div>
	</>);
}
