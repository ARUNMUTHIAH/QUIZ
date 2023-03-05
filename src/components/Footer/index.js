import { Box } from '@mui/material';
import React from 'react';
import Finish from './Buttons/Finish';
import Next from './Buttons/Next';

const Action = (context) => {
	const { config: { quizData }, state: { currentQuestion }} = context;

	return <Box className="next">
		{quizData.length === currentQuestion
			? <Finish { ...context }/>
			: <Next { ...context }/>}
	</Box>;
};

export default Action;
