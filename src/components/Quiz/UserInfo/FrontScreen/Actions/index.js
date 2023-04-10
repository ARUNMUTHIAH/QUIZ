import React from 'react';
import { Box } from '@mui/material';
import Buttons from '../Buttons';

const Action = (context) =>
	<Box className="action">
		<h2 className="actionLabel">
			Quiz & Prove Your Worth!
		</h2>
		<Buttons { ...context }/>
	</Box>;

export default Action;
