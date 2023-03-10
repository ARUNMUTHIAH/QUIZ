import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../services/QuizManager';
import { peek } from '@laufire/utils/debug';

const CommonAdd = (context) => {
	const { setState, state, state: { userInfo }, config } = context;
	const { input } = state;

	return (
		<Button
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			onClick={ () => setState({
				...state,
				userInfo: peek([...userInfo, input]),
				input: config.inputData,
			}) }
		>
			+
		</Button>
	);
};

export default CommonAdd;
