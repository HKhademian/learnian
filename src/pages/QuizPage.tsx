import React from 'react';
import {useParams} from 'react-router-dom';

import {AppFrame,} from '../components';
import {AppDataContext} from "../data";
import {ClassCard} from "../components/ClassCard";
import {QuizCard} from "../components/QuizCard";
import {QuestionCard} from "../components/QuestionCard";
import {NewQuestionSection} from "../components/NewQuestionSection";

export const QuizPage = () => {
	type QuizPageParams = { id: string };

	const appData = React.useContext(AppDataContext);
	const {id} = useParams<QuizPageParams>();
	const currentQuiz = id && id.length && appData.quizzes.find(it => it.id === id);
	if (!currentQuiz) return <div>Quiz Not found</div>;
	const clazz = appData.classes.find(it => it.id === currentQuiz.classId);

	return (<AppFrame>
		<div className='row row-cols-lg-2 gx-2 gy-2'>
			<div className='col-md-6'>
				<ClassCard item={clazz!!}/>
			</div>
			<div className='col-md-6'>
				<QuizCard item={currentQuiz}/>
			</div>
		</div>

		<h3>Questions</h3>
		<hr/>

		<div className='col-lg-12 col-12'>
			<NewQuestionSection quiz={currentQuiz}/>
		</div>
		{currentQuiz.questions.map((item, index) => <>
			<QuestionCard key={item.ask} index={index} item={item}/>
		</>)}
	</AppFrame>);
}
