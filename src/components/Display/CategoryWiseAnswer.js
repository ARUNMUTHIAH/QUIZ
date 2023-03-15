import { Box } from '@mui/material';
import React from 'react';

const CategoryWiseAnswer = (context) => {
	const { state: { score, currentCategory, userInfo }} = context;

	return (
		<Box className="outerBorder">
			<h1>
				Your {userInfo[currentCategory].name} Score is {score} Points
			</h1>
			<h2>ANSWERS</h2>
			{userInfo[currentCategory].quizData.map((quiz, key) =>
				<Box key={ key } className="option">
					{quiz.answer}
				</Box>)}
		</Box>);
};

export default CategoryWiseAnswer;
