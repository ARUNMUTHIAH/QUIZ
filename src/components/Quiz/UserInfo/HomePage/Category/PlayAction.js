import { Box } from '@mui/material';
import React from 'react';
import Display from '../../Q & A/CategoryWiseAnswer';
import NextCategoryAction from '../../Q & A/Footer/NextCategory';
import OverAllFinish from '../../Q & A/Footer/OverAllFinish';
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
		</Box>
	);
};

export default PlayAction;
