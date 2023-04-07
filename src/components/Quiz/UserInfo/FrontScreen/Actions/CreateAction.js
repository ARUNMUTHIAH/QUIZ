import React from 'react';
import Inputs from '../../OwnerInfo';
import Create from '../Buttons/Create';

const CreateAction = (context) => {
	const { state: { role }} = context;

	return role
		? <Inputs { ...context }/>
		: <Create { ...context }/>;
};

export default CreateAction;
