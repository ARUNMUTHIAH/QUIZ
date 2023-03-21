import React from 'react';
import CongratulationScreen from './CongratulationScreen/CongratulationScreen';
import Action from './Theme/Action';

const Quiz = (context) => {
	const { state: { isFinish }} = context;

	return isFinish
		? <CongratulationScreen { ...context }/>
		: <Action { ...context }/>;
};

export default Quiz;
