import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchBar from './SearchBar';

const Input = () =>
	<Box className="textBox">
		<TextField { ...{
			placeholder: 'Find a quiz',
			class: 'input',
		} }
		/>
		<SearchBar/>
	</Box>;

export default Input;
