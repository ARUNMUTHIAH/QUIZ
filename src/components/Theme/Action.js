/* eslint-disable complexity */
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, InputLabel } from '@mui/material';
import SelectAllButton from '../SelectAllButton';

const Action = (context) => {
	const { state: { role }} = context;
	const isUserExist = role;

	return (
		<Box>
			<Box className={ isUserExist ? null : 'action' }>
				{isUserExist
					? null
					: <InputLabel class="actionLabel">
						Quiz & Prove Your Worth!
					</InputLabel>}
				<SelectAllButton { ...context }/>
			</Box>
		</Box>
	);
};

export default Action;
