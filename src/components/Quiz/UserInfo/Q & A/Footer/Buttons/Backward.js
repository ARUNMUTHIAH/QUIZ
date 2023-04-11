import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Backward = (context) => {
	const { state: { currentQuestion },
		setState } = context;

	return (
		<Button { ...{ variant: 'contained',
			size: 'medium',
			className: 'backward',
			disabled: currentQuestion === 0,
			onClick: () => setState((state) => ({
				...state,
				currentQuestion: currentQuestion - 1,
			})) } }
		>
			<ArrowBackIcon/>
		</Button>);
};

export default Backward;
