/* eslint-disable max-lines-per-function */
import React from 'react';
import { Button } from '@mui/material';

const Next = (context) => {
	const { state: { currentQuestion, userAnswer, score },
		setState, config: { quizData }} = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			onClick: () => setState((state) => ({
				...state,
				currentQuestion: currentQuestion + 1,
				question: quizData[currentQuestion].question,
				options: quizData[currentQuestion].options,
				score: userAnswer === quizData[currentQuestion - 1].answer
					? score + 1
					: score,
			})),
		} }
		>
			NEXT
		</Button>);
};

export default Next;
