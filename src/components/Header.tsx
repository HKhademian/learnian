import React from 'react';
import {useHistory} from "react-router-dom";
import {AppDataContext} from "../data";
import {AccountWidget} from "./AccountWidget";

export const Header = (props: { title?: string, back?: boolean, sections?: any[] }) => {
	const history = useHistory();
	const appData = React.useContext(AppDataContext);
	const {title, back} = props;

	const onClickHome = () => history.push('/');
	const onClickBack = () => history.goBack();
	const onClickClassRoom = () => history.push('/classroom');
	const onClickAccount = () => history.push('/account');
	const onClickLogout = () => appData.logout();

	return (<>
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<span className="navbar-brand">{title ?? "Learnian"}</span>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
									aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"/>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" onClick={onClickHome}>Home</a>
							</li>
							<li className="nav-item d-flex">
								{!appData.user && <a className="nav-link" onClick={onClickAccount}>Account</a>}
								{appData.user && <a className="nav-link btn-outline-danger" onClick={onClickLogout}>Logout</a>}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	</>);

};
