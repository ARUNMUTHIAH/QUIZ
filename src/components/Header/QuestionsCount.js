import { Box } from '@mui/material';
import React from 'react';

const QuestionsCount = (context) => {
	const { state: { currentQuestion }, config: { quizData }} = context;

	return (
		<Box className="question">
			Questions {currentQuestion - 1}  out of {quizData.length}
		</Box>);
};

export default QuestionsCount;
