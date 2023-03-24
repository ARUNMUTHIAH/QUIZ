import React from 'react';
import CongratulationScreen from './CongratulationScreen/CongratulationScreen';
import FrontScreen from './Theme';

const Quiz = (context) => {
	const { state: { isFinish }} = context;

	return isFinish
		? <CongratulationScreen { ...context }/>
		: <FrontScreen { ...context }/>;
};

export default Quiz;
