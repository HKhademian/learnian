import React from "react";
import {AppDataContext, Class} from "../data";

export const ClassInfoCard = ({item}: { item: Class }) => {
	const appData = React.useContext(AppDataContext);
	const owner = appData.users.find(it => it.id === item.ownerId);
	return (<>
		<div className='container'>
			<div className='card card-body my-2'>
				<h3 className='d-inline-block'>Class '{item.title}</h3>
				<span>Teacher {owner?.title}</span>
				<div>Students {item.studentCount}</div>
				<div>{item.desc}</div>
			</div>
		</div>
	</>)
};
