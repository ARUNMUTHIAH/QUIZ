import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../../../../services/QuizManager';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Forward = (context) => {
	const { state: { currentQuestion, userAnswer },
		setState } = context;

	return (
		<Button { ...{ variant: 'contained',
			size: 'medium',
			className: 'forward',
			disabled: !userAnswer,
			onClick: () => setState((state) => ({
				...state,
				currentQuestion: currentQuestion + 1,
				score: QuizManager.updateScore(context),
				userAnswer: '',
			})) } }
		>
			<ArrowForwardIcon/>
		</Button>);
};

export default Forward;
