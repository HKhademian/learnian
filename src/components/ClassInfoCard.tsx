import React from "react";
import {Class} from "../data";

export const ClassInfoCard = ({item}: { item: Class }) => (<>
	<div className='container'>
		<div className='card card-body my-2'>
			<h3 className='d-inline-block'>Class '{item.title}</h3>
			<span>Teacher {item.owner.title}</span>
			<div>Students {item.studentCount}</div>
			<div>{item.desc}</div>
		</div>
	</div>
</>);
