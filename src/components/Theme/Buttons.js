import { Box } from '@mui/material';
import React from 'react';
import SelectedComponents from '../SelectedComponents';
import OwnerButton from '../OwnerButton';
import UserButton from '../UserButton';

const Buttons = (context) => {
	const { state: { role }} = context;

	return role === ''
		? <Box>
			<OwnerButton { ...context }/>
			<UserButton { ...context }/>
		</Box>
		: <SelectedComponents{ ...context }/>;
};

export default Buttons;
