import React from 'react';
import { Button } from '@mui/material';

const NextCategory = (context) => {
	const { setState } = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			onClick: () => setState((prevState) => {
				const { userInfo } = prevState;

				return {
					...prevState,
					currentCategory: userInfo[prevState.currentCategory].id + 1,
					currentQuestion: 0,
					userInfo: prevState.Info,
					userAnswer: '',
					score: 0,
				};
			}),
		} }
		>Next</Button>);
};

export default NextCategory;
