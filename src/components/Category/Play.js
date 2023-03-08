import { Button } from '@mui/material';
import React from 'react';

const Play = () =>
	<Button { ...{
		className: 'play',
		variant: 'contained',
		size: 'large',
	} }
	>PLAY NOW!</Button>;

export default Play;
