import React from 'react';
import {useHistory} from "react-router-dom";

import {AppDataContext, Class,} from '../data';
import {AppFrame,} from '../components';
import {ClassCard} from "../components/ClassCard";
import {NewClassSection} from "../components/NewClassSection";


export const ClassListPage = () => {
	const history = useHistory();
	const appData = React.useContext(AppDataContext);
	const onAttend = (cls: Class) => history.push('/classroom/' + cls.id);

	return (<AppFrame>
		<div className='container'>
			<h1>List All Classes</h1>
			<hr/>
			<div className='row row-cols-lg-2 gx-2 gy-2'>
				{appData.user && <>
					<div className='col-lg-12 col-12'>
						<NewClassSection {...{appData}}/>
					</div>
				</>}
				{appData.classes.map((cls) => (<>
					<div className='col-lg-6'>
						<ClassCard {...{appData, cls, onAttend}}/>
					</div>
				</>))}
			</div>
		</div>
	</AppFrame>);
}
