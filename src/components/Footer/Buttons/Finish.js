import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../services/QuizManager';

const Finish = (context) => {
	const { setState } = context;

	return (
		<Button { ...{ variant: 'contained',
			size: 'large',
			onClick: () => setState((state) => ({
				...state,
				isEnd: true,
				score: QuizManager.updateScore(context),
			}))		} }
		>FINISH</Button>);
};

export default Finish;
