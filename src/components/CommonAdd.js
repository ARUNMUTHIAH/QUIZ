import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../services/QuizManager';

const CommonAdd = (context) => {
	const { setState, state,
		state: { Info, input, dropDownList }, config } = context;

	return (
		<Button
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			onClick={ () => setState({
				...state,
				Info: Info.map((user) => (user.name === dropDownList
					? { ...user, quizData: [...user.quizData, input] }
					: user)),
				input: config.inputData,
			}) }
		>
			+
		</Button>
	);
};

export default CommonAdd;
