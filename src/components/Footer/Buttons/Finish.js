import React from 'react';
import { Button } from '@mui/material';

const Finish = (context) => {
	const { setState, state: { userAnswer, currentQuestion, score },
		config: { quizData }} = context;

	return (
		<Button { ...{ variant: 'contained',
			size: 'large',
			onClick: () => setState((state) => ({
				...state,
				isEnd: true,
				score: userAnswer === quizData[currentQuestion - 1].answer
					? score + 1
					: score,
			}))		} }
		>FINISH</Button>);
};

export default Finish;
