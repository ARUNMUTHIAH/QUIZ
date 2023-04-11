import React from 'react';
import { Box, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (context) => {
	const { setState } = context;

	return <Box className="searchBar">
		<Button { ...{
			size: 'xxx-large',
			sx: { color: 'black' },
			endIcon: <SearchIcon/>,
			onClick: () => setState((prevState) => ({
				...prevState,
				userInfo: prevState.userInfo.filter((user) =>
					user.name === prevState.searchInput),
				searchInput: '',
			})),
		} }
		/>
	</Box>;
};

export default SearchBar;
