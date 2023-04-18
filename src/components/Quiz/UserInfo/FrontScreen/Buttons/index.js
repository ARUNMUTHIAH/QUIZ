import { Box } from '@mui/material';
import React from 'react';
import Create from './Create';
import Start from './Start';

const Buttons = (context) =>
	<Box>
		<Start { ...context }/>
		<Create { ...context }/>
	</Box>;

export default Buttons;
