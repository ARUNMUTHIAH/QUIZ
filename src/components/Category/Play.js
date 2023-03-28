import { Box, Button } from '@mui/material';
import React from 'react';

const Play = (context) => {
	const { setState, data: category } = context;

	return (
		<Box className="play">
			<Button { ...{
				variant: 'contained',
				size: 'large',
				onClick: () => setState((state) => ({
					...state,
					isPlay: !state.isPlay,
					userInfo: state.userInfo.filter((value) =>
						value.id === category.id),
					isNext: false,
				})),
			} }
			>PLAY NOW!</Button>
		</Box>
	);
};

export default Play;
