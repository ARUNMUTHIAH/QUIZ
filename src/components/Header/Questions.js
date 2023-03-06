import React from 'react';
import { Box, InputLabel } from '@mui/material';
import Options from '../Body/Options';
import QuestionsCount from './QuestionsCount';

const Questions = (context) => {
	const { state: { currentQuestion }, config: { quizData }} = context;

	return (
		<Box className="outerBorder">
			<InputLabel class="question">
				{quizData[currentQuestion].question}</InputLabel>
			<QuestionsCount { ...context }/>
			<Options { ...context }/>
		</Box>);
};

export default Questions;
