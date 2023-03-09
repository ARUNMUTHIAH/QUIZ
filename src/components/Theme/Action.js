import { Box, InputLabel } from '@mui/material';
import React from 'react';
import OwnerAction from '../OwnerAction';
import UserAction from '../UserAction';

const Action = (context) =>
	<Box className="action">
		<InputLabel class="actionLabel">
			Quiz & Prove Your Worth!</InputLabel>
		<UserAction { ...context }/>
		<OwnerAction { ...context }/>
	</Box>;

export default Action;
