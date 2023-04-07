import React from 'react';
import { Box, InputLabel } from '@mui/material';
import Buttons from './Buttons';

const Action = (context) =>
	<Box>
		<Box className="action">
			<InputLabel class="actionLabel">
				Quiz & Prove Your Worth!
			</InputLabel>
			<Buttons { ...context }/>
		</Box>
	</Box>
	;

export default Action;
