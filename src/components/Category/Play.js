import { Box, Button } from '@mui/material';
import React from 'react';

const Play = (context) => {
	const { setState, config: { categories }, data: category } = context;

	return (
		<Box className="play">
			<Button { ...{
				variant: 'contained',
				size: 'large',
				onClick: () => setState((state) => ({
					...state,
					isPlay: !state.isPlay,
					userInfo: categories.filter((value) =>
						value.id === category.id),
				})),
			} }
			>PLAY NOW!</Button>
		</Box>
	);
};

export default Play;
