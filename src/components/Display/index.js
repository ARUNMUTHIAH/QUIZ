import React from 'react';
import { Box } from '@mui/material';
import FinalScreen from './FinalScreen';
import Quiz from './Quiz';

const Display = (context) => {
	const { state: { currentQuestion }, config: { quizData }} = context;

	return (
		<Box>
			{quizData.length === currentQuestion - 1
				? <FinalScreen { ...context }/>
				: <Quiz { ...context }/>}
		</Box>);
};

export default Display;
