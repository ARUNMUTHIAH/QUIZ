import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../../../../services/QuizManager';
import ForwardIcon from '@mui/icons-material/Forward';

const Next = (context) => {
	const { state: { currentQuestion, userAnswer },
		setState } = context;

	return (
		<Button { ...{ variant: 'contained',
			size: 'large',
			disabled: !userAnswer,
			onClick: () => setState((state) => ({
				...state,
				currentQuestion: currentQuestion + 1,
				score: QuizManager.updateScore(context),
				userAnswer: '',
			})) } }
		>
			<ForwardIcon/>
		</Button>);
};

export default Next;
