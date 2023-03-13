import { Box } from '@mui/material';
import React from 'react';

const QuestionsCount = (context) => {
	const { state: { currentQuestion, userInfo, currentCategory }} = context;

	return (
		<Box className="question">
			Questions {currentQuestion + 1}
			out of {userInfo[currentCategory].quizData.length}
		</Box>);
};

export default QuestionsCount;
