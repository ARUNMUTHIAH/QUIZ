/* eslint-disable max-len */
import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../services/QuizManager';
import { peek } from '@laufire/utils/debug';

const CommonAdd = (context) => {
	const { setState, state, state: { userInfo, input, dropDownList }, config } = context;

	return (
		<Button
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			onClick={ () => setState({
				...state,
				userInfo: userInfo.map((user) => (user.name === dropDownList
					? peek({ ...user, quizData: [...user.quizData, input] })
					: user)),
				input: config.inputData,
			}) }
		>
			+
		</Button>
	);
};

export default CommonAdd;
