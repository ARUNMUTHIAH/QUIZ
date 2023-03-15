/* eslint-disable max-len */
import React from 'react';
import { Box } from '@mui/material';
import Quiz from './Quiz';
import CategoryWiseAnswer from './CategoryWiseAnswer';

const Display = (context) => {
	const { state: { currentQuestion, userInfo, currentCategory }} = context;

	return (
		<Box>
			{userInfo[currentCategory].quizData.length === currentQuestion
				? <CategoryWiseAnswer { ...context }/>
				: <Quiz { ...context }/>}
		</Box>);
};

export default Display;
