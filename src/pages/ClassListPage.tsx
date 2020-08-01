import React from 'react';
import {useHistory} from "react-router-dom";

import {AppDataContext, Class,} from '../data';
import {AppFrame,} from '../components';
import {ClassCard} from "../components/ClassCard";
import {NewClassSection} from "../components/NewClassSection";


export const ClassListPage = () => {
	const appData = React.useContext(AppDataContext);
	const history = useHistory();
	const onAttend = (item: Class) => history.push(`/classroom/${item.id}`);

	return (<AppFrame>
		<h1>List All Classes</h1>
		<hr/>
		<div className='row row-cols-lg-2 gx-2 gy-2'>
			<div className='col-lg-12 col-12'>
				<NewClassSection/>
			</div>
			{appData.classes.map((item) => (<>
				<div className='col-lg-6' key={item.id}>
					<ClassCard {...{item, onAttend}}/>
				</div>
			</>))}
		</div>
	</AppFrame>);
}
