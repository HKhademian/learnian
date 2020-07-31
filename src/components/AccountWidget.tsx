import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {AppData} from "../data";

type AccountFormData = { reg: boolean, username: string, password: string, title?: string }

export const AccountWidget = ({appData}: { appData: AppData }) => {
	const [reg, setReg] = useState(false);
	const switchMode = () => setReg(!reg);

	const {register, handleSubmit} = useForm<AccountFormData>();
	const onSubmit = (data: AccountFormData) => {
		reg ? appData.register(data.username, data.password, data.title!!)
			: appData.login(data.username, data.password)
	};

	const logout = () => appData.logout();

	return (<>
		<div className='container'>
			<h2>Account Management</h2>
			<hr/>

			{appData.user && <>
				<h4>Hi {appData.user.title}</h4>
				<button className='btn btn-danger' onClick={logout}>Logout</button>
			</>}
			{!appData.user && <>
				<div className="mb-3">
					<h4>{reg ? 'Register new account' : 'Login to account'}</h4>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3">
						<label htmlFor="username" className="form-label">Username</label>
						<input type="username" name="username" className="form-control" id="username"
									 ref={register({required: true})}/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">Password</label>
						<input type="password" name="password" className="form-control" id="password"
									 ref={register({required: true})}/>
					</div>
					{reg && <>
						<div className="mb-3">
							<label htmlFor="title" className="form-label">Title</label>
							<input type="title" name="title" className="form-control" id="title"
										 ref={register({required: true})}/>
							<div id="titleHelp" className="form-text">Choose a fancy name</div>
						</div>
					</>}
					<div className="mb-3">
						<a className='btn btn-link' onClick={switchMode}>
							{reg ? 'I have an account!' : 'I want to register.'}
						</a>
					</div>
					<button type="submit" className="btn btn-primary">{reg ? 'Register' : 'Login'}</button>
				</form>
			</>}
		</div>
	</>);
}
