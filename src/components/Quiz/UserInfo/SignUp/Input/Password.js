import { Box, TextField } from '@mui/material';
import React from 'react';

const Password = () =>
	<Box>
		<TextField { ...{
			placeholder: 'Password',
		} }
		/>
	</Box>;

export default Password;
