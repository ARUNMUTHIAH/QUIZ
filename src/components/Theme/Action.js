/* eslint-disable complexity */
import { Box, InputLabel } from '@mui/material';
import React from 'react';
import OwnerAction from '../OwnerAction';
import UserAction from '../UserAction';

const Action = (context) => {
	const { state: { user, owner }} = context;

	return <Box>
		<Box className={ !user && !owner ? 'action' : null }>
			{ !user && !owner
				? <InputLabel class="actionLabel">
					Quiz & Prove Your Worth!</InputLabel>
				: null}
			<UserAction { ...context }/>
			<OwnerAction { ...context }/>
		</Box>
	</Box>;
};

export default Action;
