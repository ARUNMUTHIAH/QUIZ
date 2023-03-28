/* eslint-disable no-magic-numbers */
/* eslint-disable max-len */
import { peek } from '@laufire/utils/debug';
import { Box } from '@mui/material';
import React from 'react';
import NextCategory from './NextCategory';

const NextCategoryAction = (context) => {
	const { state: { userInfo, currentCategory, currentQuestion }} = context;

	return <Box>
		{peek(userInfo[currentCategory].quizData.length) === currentQuestion
			? <NextCategory { ...context }/>
			: null}
	</Box>;
};

export default NextCategoryAction;
