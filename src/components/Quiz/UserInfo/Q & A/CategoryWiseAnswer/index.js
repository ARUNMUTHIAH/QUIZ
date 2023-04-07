import React from 'react';
import { Box } from '@mui/material';
import CategoryWiseAnswer from './CategoryWiseAnswer';
import QandA from '..';

const Display = (context) => {
	const { state: { currentQuestion, userInfo, currentCategory }} = context;

	return (
		<Box>
			{userInfo[currentCategory].quizData.length === currentQuestion
				? <CategoryWiseAnswer { ...context }/>
				: <QandA { ...context }/>}
		</Box>);
};

export default Display;
