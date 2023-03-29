/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../services/QuizManager';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';

const Finish = (context) => {
	const { setState,
		state: { userAnswer, currentQuestion,
			userInfo }} = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			disabled: !userAnswer,
			onClick: () => setState((prevState) => ({
				...prevState,
				score: QuizManager.updateScore(context),
				currentQuestion: currentQuestion + 1,
				isNext:
					userInfo[prevState.currentCategory].id + 1 === 6
						? !prevState.isNext
						: prevState.isNext,
			})),
		} }
		><DoneAllTwoToneIcon/></Button>);
};

export default Finish;
