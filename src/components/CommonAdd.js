/* eslint-disable max-len */
import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../services/QuizManager';
import { peek } from '@laufire/utils/debug';

const CommonAdd = (context) => {
	const { setState, state, state: { userInfo, input }, config: { categories }, config } = context;

	return (
		<Button
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			onClick={ () => setState({
				...state,
				userInfo: userInfo.map((user) => (peek(user) === categories.name
					? [...user.quizData, input]
					: '')),
				input: config.inputData,
			}) }
		>
			+
		</Button>
	);
};

export default CommonAdd;
