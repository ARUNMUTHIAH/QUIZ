import React from 'react';
import CongratulationScreen from './CongratulationScreen/CongratulationScreen';
import WelcomePage from './Theme';

const Quiz = (context) => {
	const { state: { isFinish }} = context;

	return isFinish
		? <CongratulationScreen { ...context }/>
		: <WelcomePage { ...context }/>;
};

export default Quiz;
