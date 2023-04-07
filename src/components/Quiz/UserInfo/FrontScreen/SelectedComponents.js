import React from 'react';
import Components from './Components';

const SelectedComponents = (context) => {
	const { state: { role }} = context;
	const Component = Components[role];

	return <Component { ...context }/>;
};

export default SelectedComponents;
