/* eslint-disable max-len */
import React from 'react';
import { Box } from '@mui/material';
import FinalScreen from './FinalScreen';
import Quiz from './Quiz';
import NextCategory from '../Footer/Buttons/NextCategory';

const Display = (context) => {
	const { state: { currentQuestion, userInfo, currentCategory }} = context;

	return (
		<Box>
			{userInfo[currentCategory].quizData.length === currentQuestion
				? <FinalScreen { ...context }/>
				: <Quiz { ...context }/>}
			{userInfo[currentCategory].quizData.length === currentQuestion
				? <NextCategory { ...context }/>
				: null}
		</Box>);
};

export default Display;
