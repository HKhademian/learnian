import React from "react";
import {AppDataContext, Class, Question, Quiz} from "../data";
import {useForm} from "react-hook-form";
import {generateID} from "../utils";
import {loremIpsum} from "lorem-ipsum";

const Wrapper = ({children}: { children: any }) => (<>
	<div className='card mb-3'>
		<div className="card-body">
			<h5 className="card-title">Define new Question</h5>
			<hr/>
			{children}
		</div>
	</div>
</>);

export const NewQuestionSection = ({quiz}: { quiz: Quiz }) => {
	const appData = React.useContext(AppDataContext);
	const user = appData.user;

	type NewQuestionFormData = { ask: string, answer: number, option1: string, option2: string, option3: string, option4: string };
	const {register, handleSubmit, errors} = useForm<NewQuestionFormData>();
	const onSubmit = (data: NewQuestionFormData): any => {
		if (!user) return alert('you most signin to add question.');
		if (!quiz) return alert('no quiz to add');
		if (quiz.owner !== user) return alert('only quiz owner can modify it');
		const newItem = new Question(data.ask, data.answer, data.option1, data.option2, data.option3, data.option4);
		quiz.questions.push(newItem);
		appData.setQuizzes([...appData.quizzes]);
		return true;
	}

	if (!user) return (<Wrapper>
		<h5 className="text-danger">Please login to add quiz</h5>
	</Wrapper>);

	if (!quiz) return (<Wrapper>
		<h5 className="text-danger">No quiz to add to</h5>
	</Wrapper>);

	if (quiz.owner !== user) return (<Wrapper>
		<h5 className="text-danger">You are no owner of this quiz</h5>
	</Wrapper>);

	return (<Wrapper>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="title" className="form-label">Title</label>
				<input type='text' name="ask" id="ask" aria-describedby="askHelp"
							 ref={register({required: true})} className="form-control"
							 defaultValue={loremIpsum()}/>
				<div id="askHelp" className="form-text">Write your Question</div>
				{errors.ask && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="answer" className="form-label">True Answer option</label>
				<input min={1} max={120} step={1} defaultValue={1} type='number' name="answer" id="answer" aria-describedby="answerHelp"
							 ref={register({required: true})} className="form-control"/>
				{errors.answer && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="option1" className="form-label">Option #1</label>
				<input type='text' name="option1" id="option1" aria-describedby="option1Help"
							 ref={register({required: true})} className="form-control" defaultValue={loremIpsum()}/>
				<div id="option1Help" className="form-text">Write your First choice</div>
				{errors.option1 && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="option2" className="form-label">Option #2</label>
				<input type='text' name="option2" id="option2" aria-describedby="option2Help"
							 ref={register({required: true})} className="form-control" defaultValue={loremIpsum()}/>
				<div id="option2Help" className="form-text">Write your First choice</div>
				{errors.option2 && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="option3" className="form-label">Option #3</label>
				<input type='text' name="option3" id="option3" aria-describedby="option3Help"
							 ref={register({required: true})} className="form-control" defaultValue={loremIpsum()}/>
				<div id="option3Help" className="form-text">Write your First choice</div>
				{errors.option3 && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="option4" className="form-label">Option #4</label>
				<input type='text' name="option4" id="option4" aria-describedby="option4Help"
							 ref={register({required: true})} className="form-control" defaultValue={loremIpsum()}/>
				<div id="option4Help" className="form-text">Write your First choice</div>
				{errors.option4 && <span className='text-danger'>This field is required</span>}
			</div>

			<input className="btn btn-primary" type="submit"/>
		</form>
	</Wrapper>);
}
