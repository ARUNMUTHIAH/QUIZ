import React from 'react';
import Inputs from './OwnerInfo';
import OwnerButton from './OwnerButton';

const OwnerAction = (context) => {
	const { state: { role }} = context;

	return role
		? <Inputs { ...context }/>
		: <OwnerButton { ...context }/>;
};

export default OwnerAction;
