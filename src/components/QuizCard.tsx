import React from "react";
import {AppDataContext, Quiz} from "../data";
import {useHistory} from "react-router-dom";

export const QuizCard = ({item}: { item: Quiz }) => {
	const history = useHistory();
	const appData = React.useContext(AppDataContext);

	const onAttend = (item: Quiz) => history.push(`/quiz/${item.id}`);

	const onDeleteItem = (item: Quiz) => {
		if (item.ownerId !== appData.user?.id) return alert('only owner can delete a quiz!');
		appData.deleteQuiz(item.id);
	};

	const owner = appData.users.find(it => it.id === item.ownerId);

	return (<>
		<div className="card mb-3">
			<div className="card-body h-100 d-flex flex-column">
				<h5 className="card-title">{item.title}</h5>
				<div className='card-text d-table'>
					<div className='d-table-row'>
						<div className='d-table-cell'><strong>Teacher: </strong><em> {owner?.title}</em></div>
						<div className='d-table-cell'><strong>Class: </strong><em> {item.clazz.title}</em></div>
						<div className='d-table-cell'><strong>Questions: </strong><em> {item.questions.length}</em></div>
					</div>
					<div className='d-table-row'>
						<div className='d-table-cell'><strong>Time: </strong><em> {item.time}</em></div>
						<div className='d-table-cell'><strong>Point: </strong><em> {item.points}</em></div>
					</div>
				</div>
				<div className="btn-group align-self-stretch" role="group">
					<button type="button" className="btn btn-info" onClick={() => onAttend(item)}>Take This Quiz</button>
					{(item.ownerId === appData.user?.id) && (
						<button type="button" className="btn btn-danger" onClick={() => onDeleteItem(item)}>
							Delete Quiz
						</button>
					)}
				</div>
			</div>
		</div>
	</>);
}
