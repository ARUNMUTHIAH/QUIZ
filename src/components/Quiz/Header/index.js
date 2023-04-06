import { Box } from '@mui/material';
import React from 'react';
import Tabs from './Tabs';
import Icon from './Icon';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Header = () =>
	<Box className="header">
		<Icon/>
		<Tabs/>
		<LogIn/>
		<SignUp/>
	</Box>;

export default Header;
