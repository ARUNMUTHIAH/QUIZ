import { Box } from '@mui/material';
import React from 'react';
import Display from '../../Display';
import NextCategoryAction from '../../Footer/NextCategory';
import OverAllFinish from '../../Footer/OverAllFinish';
import HomePage from '..';
import Create from '../../FrontScreen/Buttons/Create';

const PlayAction = (context) => {
	const { state: { isPlay, isNext }} = context;

	return (
		<Box>
			{isPlay
				? <Display { ...context }/>
				: <HomePage { ...context }/>}
			{isNext
				? <OverAllFinish { ...context }/>
				: <NextCategoryAction { ...context }/>}
			<Create { ...context }/>
		</Box>);
};

export default PlayAction;
