import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../services/QuizManager';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';

const Finish = (context) => {
	const { setState, state: { userAnswer, currentQuestion }} = context;

	return (
		<Button { ...{ variant: 'contained',
			size: 'large',
			disabled: !userAnswer,
			onClick: () => setState((state) => ({
				...state,
				currentQuestion: currentQuestion + 1,
				score: QuizManager.updateScore(context),
			}))		} }
		><DoneAllTwoToneIcon/></Button>);
};

export default Finish;
