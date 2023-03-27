import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../services/QuizManager';
import { peek } from '@laufire/utils/debug';

const CommonAdd = (context) => {
	const { setState, state, state: { userInfo }, config } = context;

	return (
		<Button
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			onClick={ () => setState({
				...state,
				userInfo: userInfo.map((user) => peek(user.name)),
				input: config.inputData,
			}) }
		>
			+
		</Button>
	);
};

export default CommonAdd;
