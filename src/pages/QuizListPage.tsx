import React from 'react';

import {AppDataContext,} from '../data';
import {AppFrame,} from '../components';
import {QuizCard} from "../components/QuizCard";
import {NewQuizSection} from "../components/NewQuizSection";

export const QuizListPage = () => {
	const appData = React.useContext(AppDataContext);

	return (<AppFrame>
		<h1>List All Quiz</h1>
		<hr/>
		<div className='row row-cols-lg-2 gx-2 gy-2'>
			<div className='col-lg-12 col-12'>
				<NewQuizSection/>
			</div>
			{appData.quizzes.map((item) => (<>
				<div className='col-lg-6' key={item.id}>
					<QuizCard {...{item}}/>
				</div>
			</>))}
		</div>
	</AppFrame>);
}
