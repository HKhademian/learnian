import React from 'react';
import {useParams} from 'react-router-dom';

import {AppFrame,} from '../components';
import {AppDataContext} from "../data";
import {ClassCard} from "../components/ClassCard";

export const ClassPage = () => {
	type ClassPageParams = { id: string };

	const appData = React.useContext(AppDataContext);
	const {id} = useParams<ClassPageParams>();
	const currentClass = id && id.length && appData.classes.find(it => it.id === id);

	if (!currentClass) return <div>Class Not found</div>;

	return (<AppFrame>
		<ClassCard single item={currentClass}/>
	</AppFrame>);
}
