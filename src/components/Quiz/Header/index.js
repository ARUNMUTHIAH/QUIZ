import { Box } from '@mui/material';
import React from 'react';
import Tabs from './Tabs';
import Icon from './Icon';
import Input from './Input';
import LogIn from './LogIn';
import SignUp from './SignUp';
import MenuBar from './MenuBar';

const Header = () =>
	<Box className="header">
		<Icon/>
		<Input/>
		<Tabs/>
		<LogIn/>
		<SignUp/>
		<MenuBar/>
	</Box>;

export default Header;
