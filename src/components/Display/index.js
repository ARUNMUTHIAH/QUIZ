import React from 'react';
import { Box } from '@mui/material';
import FinalScreen from './FinalScreen';
import Quiz from './Quiz';

const Display = (context) => {
	const { state: { currentQuestion, userInfo }} = context;

	return (
		<Box>
			{userInfo.length === currentQuestion
				? <FinalScreen { ...context }/>
				: <Quiz { ...context }/>}
		</Box>);
};

export default Display;
