/* eslint-disable complexity */
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, InputLabel } from '@mui/material';
import OwnerAction from '../OwnerAction';
import UserAction from '../UserAction';

const Action = (context) => {
	const {
		state: { role },
	} = context;
	const isUserExist = role;

	return (
		<Box>
			<Box className={ isUserExist ? null : 'action' }>
				{isUserExist
					? null
					: <InputLabel class="actionLabel">
						Quiz & Prove Your Worth!
					</InputLabel>}
				{role !== 'user' && <OwnerAction { ...context }/>}
				{role !== 'owner' && <UserAction { ...context }/> }
			</Box>
		</Box>
	);
};

export default Action;
