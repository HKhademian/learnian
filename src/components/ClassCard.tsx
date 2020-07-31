import React from "react";
import {AppData, Class} from "../data";

export const ClassCard = ({appData, cls, onAttend}: { appData: AppData, cls: Class, onAttend: (cls: Class) => void }) => {

	const onDeleteClass = (item: Class) => {
		if (item.owner !== appData.user) return alert('only owner can delete a class!');
		appData.setClasses(appData.classes.filter((it) => it !== item));
	};

	return (<>
		<div className="card mb-3">
			<div className="row row-cols-sm-1 no-gutters">
				<div className="col-md-4">
					<img width="100%" height='100%' src={cls.image} className="card-img-top" alt="Class Avatar"/>
				</div>
				<div className="col-md">
					<div className="card-body">
						<h5 className="card-title">{cls.title}</h5>
						<p className="card-text">{cls.desc}</p>
						<a className="card-link" onClick={() => onAttend(cls)}>Attend</a>
						{(cls.owner === appData.user) && (
							<a className="card-link btn-outline-danger" onClick={() => onDeleteClass(cls)}>Delete class</a>
						)}
					</div>
				</div>
			</div>
		</div>
	</>);
}
