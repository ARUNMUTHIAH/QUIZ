import React from 'react';
import { Button } from '@mui/material';

const Next = (context) => {
	const { state: { currentQuestion },
		setState, config: { quizData }} = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			className: 'next',
			onClick: () => setState((state) => ({
				...state,
				currentQuestion: currentQuestion + 1,
				question: quizData[currentQuestion].question,
				options: quizData[currentQuestion].options,
			})),
		} }
		>
			NEXT
		</Button>);
};

export default Next;
