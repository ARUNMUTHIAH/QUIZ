import React from 'react';
import { Box } from '@mui/material';
import Options from '../Body/Options';
import QuestionsCount from './QuestionsCount';

const Questions = (context) => {
	const { state: { userInfo, currentQuestion, currentCategory }} = context;

	return (
		<Box className="outerBorder">
			<h1 className="question">
				{userInfo[currentCategory]
					.quizData[currentQuestion].question}</h1>
			<QuestionsCount { ...context }/>
			<Options { ...context }/>
		</Box>);
};

export default Questions;
