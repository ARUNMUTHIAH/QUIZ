/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, Button } from '@mui/material';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
import AddHomeWorkTwoToneIcon from '@mui/icons-material/AddHomeWorkTwoTone';
import { Link } from 'react-router-dom';

const Tabs = () =>
	<Box className="tabs">
		<Link to="/HomePage">
			<Button { ...{
				size: 'large',
				color: 'secondary',
				startIcon: <AddHomeWorkTwoToneIcon/>,
			} }
			>Home</Button>
		</Link>
		<Link to="/AboutUs">
			<Button { ...{
				size: 'large',
				color: 'secondary',
				startIcon: <InfoTwoToneIcon/>,
			} }
			>AboutUs</Button>
		</Link>
		<Link to="/FAQs">
			<Button { ...{
				size: 'large',
				color: 'secondary',
				startIcon: <QuizTwoToneIcon/>,
			} }
			>FAQs</Button>
		</Link>
	</Box>;

export default Tabs;
