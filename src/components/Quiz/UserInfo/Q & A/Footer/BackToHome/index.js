import React from 'react';
import { Button } from '@mui/material';

const BackToHome = (context) => {
	const { setState } = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			className: 'backToHome',
			onClick: () => setState((prevState) => ({
				...prevState,
				isPlay: !prevState.isPlay,
				userInfo: prevState.categoriesData,
				currentQuestion: 0,
				score: 0,
			})),
		} }
		>BackToHome</Button>);
};

export default BackToHome;
