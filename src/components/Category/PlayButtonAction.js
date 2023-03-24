import { Box } from '@mui/material';
import React from 'react';
import Display from '../Display';
import NextCategoryAction from '../Footer/NextCategory';
import OverAllFinish from '../Footer/OverAllFinish';
import HomePage from '../HomePage';
import OwnerButton from '../OwnerButton';

const PlayButtonAction = (context) => {
	const { state: { isPlay, isNext }} = context;

	return (
		<Box>
			{isPlay
				? <Display { ...context }/>
				: <HomePage { ...context }/>}
			{isNext
				? <OverAllFinish { ...context }/>
				: <NextCategoryAction { ...context }/>}
			<OwnerButton { ...context }/>
		</Box>);
};

export default PlayButtonAction;
