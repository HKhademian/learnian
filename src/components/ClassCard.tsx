import React from "react";
import {AppDataContext, Class} from "../data";
import {useHistory} from "react-router-dom";

export const ClassCard = ({item, single = false}: { item: Class, single?: boolean }) => {
	const appData = React.useContext(AppDataContext);
	const history = useHistory();
	const onInfo = (item: Class) => history.push(`/class/${item.id}`);
	const onAttend = (item: Class) => history.push(`/classroom/${item.id}`);

	const onDeleteItem = (item: Class) => {
		if (item.owner !== appData.user) return alert('only owner can delete a class!');
		appData.setClasses(appData.classes.filter((it) => it !== item));
	};

	return (<>
		<div className={"card mb-3" + (single && ' my-2')}>
			<div className="row g-0">
				<div className={"col-md-4 " + (single && ' col-lg-2')}>
					<img src={item.image} className="card-img-top img-fluid" alt="Class Avatar"/>
				</div>
				<div className={"col-md-8 " + (single && ' col-lg-10')}>
					<div className="card-body h-100 d-flex flex-column">
						<h3 className="card-title">{item.title}</h3>
						<div className="card-text">
							<div><strong>Teacher: </strong><em> {item.owner.title}</em></div>
							<div><strong>Students: </strong><em> {item.studentCount}</em></div>
							<p>{item.desc}</p>
						</div>
						<div className="btn-group align-self-stretch" role="group">
							<button type="button" className="btn btn-info" onClick={() => onInfo(item)}>More Info</button>
							<button type="button" className="btn btn-secondary" onClick={() => onAttend(item)}>Attend</button>
							{(item.owner === appData.user) && (
								<button type="button" className="btn btn-danger"
												disabled={!(item.owner === appData.user)} onClick={() => onDeleteItem(item)}>
									Delete Class
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	</>);
}
