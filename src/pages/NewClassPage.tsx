import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {AppDataContext, Class} from "../data";
import {AppFrame} from "../components";

type NewClassFormData = { title: string, desc: string }

export const ClassPage = () => {
	const history = useHistory();
	const appData = React.useContext(AppDataContext);

	const {register, handleSubmit, errors} = useForm<NewClassFormData>();
	const onSubmit = (data: NewClassFormData) => {
		const newClass = new Class(data.title, data.title, data.desc, 0, appData.user as any);
		appData.setClasses([...appData.classes, newClass]);
	}

	if (!appData.user) return <div>Please login to create new class</div>

	return (<AppFrame>
		<div className='container'>
			<h1>Define new Class</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="title" ref={register({required: true})}/>
				{errors.title && <span>This field is required</span>}

				<input name="desc" ref={register({required: true})}/>
				{errors.desc && <span>This field is required</span>}

				<input type="submit"/>
			</form>
		</div>
		<hr/>
	</AppFrame>);
}
