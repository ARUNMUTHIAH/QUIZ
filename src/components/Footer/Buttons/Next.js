import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../services/QuizManager';

const Next = (context) => {
	const { state: { currentQuestion, userAnswer },
		setState, config: { quizData }} = context;

	return (
		<Button { ...{ variant: 'contained',
			size: 'large',
			disabled: !userAnswer,
			onClick: () => setState((state) => ({
				...state,
				currentQuestion: currentQuestion + 1,
				question: quizData[currentQuestion].question,
				options: quizData[currentQuestion].options,
				score: QuizManager.updateScore(context),
				userAnswer: '',
			})) } }
		>
			NEXT
		</Button>);
};

export default Next;
