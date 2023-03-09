import React from 'react';
import Action from './Action';
import FrontScreen from './FrontScreen';

const WelcomePage = (context) => {
	const { state: { isActive }} = context;

	return isActive
		? <Action { ...context }/>
		: <FrontScreen { ...context }/>;
};

export default WelcomePage;
