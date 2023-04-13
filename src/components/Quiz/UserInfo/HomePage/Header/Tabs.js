/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
import AddHomeWorkTwoToneIcon from '@mui/icons-material/AddHomeWorkTwoTone';

const style = () =>
	({ fontSize: 'x-large',
		fontWeight: 'bold' });

const Tabs = () =>
	<Box className="tabs">
		<TabContext
			value=""
		>
			<TabList>
				<AddHomeWorkTwoToneIcon sx={ { marginTop: '13px' } }/>
				<Tab
					sx={ style() }
					label="Home"
				/>
				<InfoTwoToneIcon sx={ { marginTop: '13px' } }/>
				<Tab
					sx={ style() }
					label="About Us"
				/> 	<QuizTwoToneIcon sx={ { marginTop: '13px' } }/>
				<Tab
					sx={ style() }
					label="FAQs"
				/>
			</TabList>
		</TabContext>
	</Box>;

export default Tabs;
