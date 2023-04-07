import { Box } from '@mui/material';
import React from 'react';
import SelectedComponents from '../SelectedComponents';
import Create from './Create';
import Start from './Start';

const Buttons = (context) => {
	const { state: { role }} = context;

	return role === ''
		? <Box>
			<Start { ...context }/>
			<Create { ...context }/>
		</Box>
		: <SelectedComponents { ...context }/>;
};

export default Buttons;
