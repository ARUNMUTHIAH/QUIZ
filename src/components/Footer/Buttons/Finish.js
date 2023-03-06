import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../services/QuizManager';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';

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
		><DoneAllTwoToneIcon/></Button>);
};

export default Finish;
