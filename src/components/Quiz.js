import React from 'react';
import CongratulationScreen from './CongratulationScreen/CongratulationScreen';
import FrontScreen from './FrontScreen';

const Quiz = (context) => {
	const { state: { isFinish }} = context;

	return isFinish
		? <CongratulationScreen { ...context }/>
		: <FrontScreen { ...context }/>;
};

export default Quiz;
