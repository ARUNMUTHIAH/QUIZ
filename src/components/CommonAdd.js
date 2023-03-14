import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../services/QuizManager';

const CommonAdd = (context) => {
	const { setState, state, state: { userInfo }, config } = context;
	const { input } = state;

	return (
		<Button
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			onClick={ () => setState({
				...state,
				userInfo: [...userInfo, input],
				input: config.inputData,
			}) }
		>
			+
		</Button>
	);
};

export default CommonAdd;
