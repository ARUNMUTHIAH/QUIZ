import React from 'react';
import { Button } from '@mui/material';
import QuizManager from '../../../../services/QuizManager';

const Add = (context) => {
	const { setState, state,
		state: { userInfo, input, dropDownList }, config } = context;

	return (
		<Button
			className="add"
			disabled={ QuizManager.isChecked(context) }
			variant="contained"
			size="large"
			onClick={ () => setState({
				...state,
				userInfo: userInfo.map((user) =>
					(user.name === dropDownList
						? { ...user, quizData: [...user.quizData, input] }
						: user)),
				input: config.inputData,
			}) }
		> ADD
		</Button>);
};

export default Add;
