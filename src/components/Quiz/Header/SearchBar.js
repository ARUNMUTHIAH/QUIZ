import React from 'react';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () =>
	<Box className="searchBar">
		<Button
			size="xxx-large"
			sx={ { color: 'black' } }
			endIcon={ <SearchIcon/> }
		/>
	</Box>;

export default SearchBar;
