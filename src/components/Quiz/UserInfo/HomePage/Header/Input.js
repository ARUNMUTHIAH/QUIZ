import React from 'react';
import { Box, TextField } from '@mui/material';
import SearchBar from './SearchBar';

const Input = (context) => {
	const { setState, state: { searchInput }} = context;

	return <Box className="textBox">
		<TextField { ...{
			placeholder: 'Find a quiz',
			class: 'input',
			value: searchInput,
			onChange: ({ target: { value }}) => setState((prevState) => ({
				...prevState,
				searchInput: value,
			})),
		} }
		/>
		<SearchBar { ...context }/>
	</Box>;
};

export default Input;
