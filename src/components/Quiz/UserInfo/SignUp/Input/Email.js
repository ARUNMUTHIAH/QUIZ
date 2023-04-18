import { Box, TextField } from '@mui/material';
import React from 'react';

const Email = () =>
	<Box>
		<TextField { ...{
			placeholder: 'Email',
		} }
		/>
	</Box>;

export default Email;
