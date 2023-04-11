import { Box } from '@mui/material';
import React from 'react';
import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import LogIn from './LogIn';
import SignUp from './SignUp';

const Header = (context) =>
	<Box className="header">
		<Icon { ...context }/>
		<Input { ...context }/>
		<Tabs { ...context }/>
		<LogIn { ...context }/>
		<SignUp { ...context }/>
	</Box>;

export default Header;
