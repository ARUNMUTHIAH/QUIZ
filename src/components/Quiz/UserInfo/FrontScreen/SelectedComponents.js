import React from 'react';
import PlayAction from '../HomePage/Category/PlayAction';
import Inputs from '../../OwnerInfo';

const Components = {
	start: PlayAction,
	create: Inputs,
};

const SelectedComponents = (context) => {
	const { state: { role }} = context;
	const Component = Components[role];

	return <Component { ...context }/>;
};

export default SelectedComponents;
