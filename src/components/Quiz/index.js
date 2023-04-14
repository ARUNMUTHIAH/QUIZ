import React from 'react';
import FinalScreen from './UserInfo/FinalScreen';
import FrontScreen from './UserInfo/FrontScreen';

const Quiz = (context) => {
	const { state: { isFinish }} = context;

	return isFinish

		? <FinalScreen { ...context }/>
		: <FrontScreen { ...context }/>;
};

export default Quiz;
