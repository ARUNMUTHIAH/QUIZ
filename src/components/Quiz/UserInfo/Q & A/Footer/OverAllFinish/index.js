import React from 'react';
import { Button } from '@mui/material';

const OverAllFinish = (context) => {
	const { setState, state } = context;

	return (
		<Button { ...{
			variant: 'contained',
			size: 'large',
			onClick: () => setState({
				...state,
				isFinish: true,
			}),
		} }
		>
			Finish
		</Button>);
};

export default OverAllFinish;
