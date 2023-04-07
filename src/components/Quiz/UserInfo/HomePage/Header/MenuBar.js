import React from 'react';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MenuBar = () =>
	<Box
		className="menuBar"
		sx={ { color: 'black' } }
	>
		<MenuIcon/>
	</Box>;

export default MenuBar;
