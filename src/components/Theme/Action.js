import { Box, InputLabel } from '@mui/material';
import React from 'react';
import OwnerAction from '../OwnerAction';
import UserAction from '../UserAction';

const Action = (context) => {
	const {
		state: { user, owner },
	} = context;
	const isUserExist = user || owner;

	return (
		<Box>
			<Box className={ isUserExist ? null : 'action' }>
				{isUserExist
					? null
					: <InputLabel class="actionLabel">
						Quiz & Prove Your Worth!
					</InputLabel>}
				<UserAction { ...context }/>
				<OwnerAction { ...context }/>
			</Box>
		</Box>
	);
};

export default Action;
