import {AppData, Class} from "../data";
import {useForm} from "react-hook-form";
import {generateID} from "../utils";
import {loremIpsum} from "lorem-ipsum";
import React from "react";

export const NewClassSection = ({appData}: { appData: AppData }) => {
	type NewClassFormData = { title: string, desc: string }

	const {register, handleSubmit, errors} = useForm<NewClassFormData>();

	const onSubmit = (data: NewClassFormData) => {
		if (!appData.user) return;
		if (data.title.length < 5) return alert("Choose title longer than 5");
		if (data.desc.length < 15) return alert("Choose desc longer than 15");
		const id = generateID();
		const newClass = new Class(id, data.title, data.desc, 0, appData.user as any);
		appData.setClasses([newClass, ...appData.classes]);
	}

	return (<>
		<div className='card mb-3'>
			<div className="card-body">
				<h5 className="card-title">Define new Class</h5>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3">
						<label htmlFor="teacher" className="form-label">Teacher</label>
						<input type='name' disabled value={appData.user?.title}
									 className="form-control" id="teacher" aria-describedby="teacherHelp"/>
						<div id="teacherHelp" className="form-text">you are assigned as teacher/owner</div>
					</div>

					<div className="mb-3">
						<label htmlFor="title" className="form-label">Title</label>
						<input type='title' name="title" id="title" aria-describedby="titleHelp"
									 ref={register({required: true})} className="form-control" value={loremIpsum()}/>
						<div id="titleHelp" className="form-text">Choose a proper name</div>
						{errors.title && <span>This field is required</span>}
					</div>

					<div className="mb-3">
						<label htmlFor="desc" className="form-label">Brief description</label>
						<textarea name='desc' className="form-control" id="desc" rows={3} value={loremIpsum({count: 3})}
											ref={register({required: true})} style={{resize: 'none'}}/>
						{errors.desc && <span>This field is required</span>}
					</div>

					<input className="btn btn-primary" type="submit"/>
				</form>
			</div>
		</div>
	</>);
}
