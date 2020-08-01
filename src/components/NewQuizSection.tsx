import React from "react";
import {AppDataContext, Class, Question, Quiz} from "../data";
import {useForm} from "react-hook-form";
import {generateID} from "../utils";
import {loremIpsum} from "lorem-ipsum";

const Wrapper = ({children}: { children: any }) => (<>
	<div className='card mb-3'>
		<div className="card-body">
			<h5 className="card-title">Define new Quiz</h5>
			<hr/>
			{children}
		</div>
	</div>
</>);

export const NewQuizSection = () => {
	const appData = React.useContext(AppDataContext);
	const user = appData.user;
	const classes = appData.classes.filter((it) => it.ownerId === user?.id);

	type NewQuizFormData = { classId: string, title: string, time: number, point: number, questions: number };
	const {register, handleSubmit, errors} = useForm<NewQuizFormData>();
	const onSubmit = (data: NewQuizFormData): any => {
		if (!data.classId) return alert("you most select a class");
		appData.addQuiz(data.classId, data.title, data.time, data.point);
	}

	if (!user) return (<Wrapper>
		<h5 className="text-danger">Please login to add quiz</h5>
	</Wrapper>);

	if (!classes.length) return (<Wrapper>
		<h5 className="text-danger">you don't have any classes to add new quiz</h5>
	</Wrapper>);

	return (<Wrapper>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="teacher" className="form-label">Teacher</label>
				<input type='name' disabled value={user.title}
							 className="form-control" id="teacher" aria-describedby="teacherHelp"/>
				<div id="teacherHelp" className="form-text">you are assigned as teacher/owner</div>
			</div>
			<div className="mb-3">
				<label htmlFor="classId" className="form-label">Class</label>
				<select className="form-select" name="classId" ref={register({required: true})}>
					{classes.map((it) => <>
						<option value={it.id} key={it.id}>{it.title}</option>
					</>)}
				</select>
				<div id="classIdHelp" className="form-text">quiz added to this class</div>
				{errors.classId && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="title" className="form-label">Title</label>
				<input type='title' name="title" id="title" aria-describedby="titleHelp"
							 ref={register({required: true})} className="form-control"
							 defaultValue={loremIpsum({count: 3, units: "words"})}/>
				<div id="titleHelp" className="form-text">Choose a proper name</div>
				{errors.title && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="time" className="form-label">Max Time (minutes)</label>
				<input min={1} max={120} step={1} defaultValue={15} type='number' name="time" id="time"
							 aria-describedby="timeHelp"
							 ref={register({required: true})} className="form-control"/>
				{errors.time && <span className='text-danger'>This field is required</span>}
			</div>

			<div className="mb-3">
				<label htmlFor="point" className="form-label">Max Point</label>
				<input min={1} max={100} step={1} defaultValue={25} type='number' name="point" id="point"
							 aria-describedby="pointHelp"
							 ref={register({required: true})} className="form-control"/>
				{errors.point && <span className='text-danger'>This field is required</span>}
			</div>

			<input className="btn btn-primary" type="submit"/>
		</form>
	</Wrapper>);
}
