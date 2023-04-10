import { Box } from '@mui/material';
import React from 'react';
import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Header = () =>
	<Box className="header">
		<Icon/>
		<Input/>
		<Tabs/>
		<LogIn/>
		<SignUp/>
	</Box>;

export default Header;
