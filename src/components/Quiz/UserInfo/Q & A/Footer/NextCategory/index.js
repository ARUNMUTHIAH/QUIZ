import { Box } from '@mui/material';
import React from 'react';
import BackToHome from '../BackToHome';
import NextCategory from './NextCategory';

const NextCategoryAction = (context) => {
	const { state: { userInfo, currentCategory,
		currentQuestion }} = context;

	return <Box>
		{userInfo[currentCategory].quizData.length === currentQuestion
			? <NextCategory { ...context }/>
			: null}
		{userInfo[currentCategory].quizData.length === currentQuestion
			? <BackToHome { ...context }/>
			: null}
	</Box>;
};

export default NextCategoryAction;
