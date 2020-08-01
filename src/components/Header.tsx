import React from 'react';
import {useHistory} from "react-router-dom";
import {AppDataContext} from "../data";

export const Header = ({title = 'Learnian', back = false}: { title?: string, back?: boolean }) => {
	const history = useHistory();
	const appData = React.useContext(AppDataContext);

	const goto = (location: string) => () => history.push(location);

	const onClickLogout = () => appData.logout();
	const onClickBack = () => history.goBack();

	return (<>
		<nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
			<div className="container">
				<span className="navbar-brand">{title}</span>
				{back && history.length && <>
					<ul className="navbar-nav">
						<li className="nav-item">
							<button className="btn btn-primary" onClick={onClickBack}>Back</button>
						</li>
					</ul>
				</>}

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
								aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"/>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" onClick={goto('/')}>Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={goto('/classes')}>Classes</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={goto('/quizzes')}>Quizzes</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={goto('/users')}>Users</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" onClick={goto('/classroom')}>ClassRoom</a>
						</li>
					</ul>
					<ul className="navbar-nav container-fluid justify-content-end">
						{appData.user && <>
							<li className="nav-item">
								<span className='navbar-text d-inline-block'> Hi {appData.user.title} | </span>
							</li>
							<li className="nav-item">
								<a href="#" className="nav-link" onClick={onClickLogout}>Logout</a>
							</li>
							<li className="nav-item">
								<span className='navbar-text d-inline-block'> | </span>
							</li>
						</>}
						<li className="nav-item">
							<a href="#" className="nav-link" onClick={goto('/account')}>Account</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</>);

};
