import { Box } from '@mui/material';
import React from 'react';

const FinalScreen = (context) => {
	const { state: { score, currentCategory },
		config: { categories }} = context;

	return (
		<Box className="outerBorder">
			<h1>Game Over your Final score is {score} points </h1>
			<h2>ANSWERS</h2>
			{categories[currentCategory].quizData.map((quiz, key) =>
				<Box key={ key } className="option">
					{quiz.answer}
				</Box>)}
		</Box>);
};

export default FinalScreen;
