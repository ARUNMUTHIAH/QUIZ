/* eslint-disable max-lines-per-function */
import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../../services/QuizManager';

const Add = (context) => {
	const { setState, state,
		state: { userInfo, input, dropDownList }, config } = context;

	return (
		<Button
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			onClick={ () => setState({
				...state,
				userInfo: userInfo.map((category) =>
					(category.name === dropDownList
						? {
							...category,
							quizData: [...category.quizData, input],
						}
						: category)),
				input: config.inputData,
			}) }
		>
			+
		</Button>);
};

export default Add;
