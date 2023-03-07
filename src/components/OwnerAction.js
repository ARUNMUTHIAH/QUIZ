import React from 'react';
import Inputs from './OwnerInfo';
import OwnerButton from './OwnerButton';

const OwnerAction = (context) => {
	const { state: { owner }} = context;

	return owner
		? <Inputs { ...context }/>
		: <OwnerButton { ...context }/>;
};

export default OwnerAction;
