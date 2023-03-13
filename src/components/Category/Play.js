import { Box, Button } from '@mui/material';
import React from 'react';

const Play = (context) => {
	const { setState } = context;

	return (
		<Box className="play">
			<Button { ...{
				variant: 'contained',
				size: 'large',
				onClick: () => setState((state) => ({
					...state,
					isPlay: !state.isPlay,
				})),
			} }
			>PLAY NOW!</Button>
		</Box>
	);
};

export default Play;
