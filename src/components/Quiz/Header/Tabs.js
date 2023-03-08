import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import HouseIcon from '@mui/icons-material/House';
import RestoreIcon from '@mui/icons-material/Restore';
import PeopleIcon from '@mui/icons-material/People';

const Tabs = () =>
	<Box className="tabs">
		<TabContext>
			<TabList>
				<HouseIcon/>
				<Tab label="Home"/>
				<RestoreIcon/>
				<Tab label="Activity"/>
				<PeopleIcon/>
				<Tab label="Classes"/>
			</TabList>
		</TabContext>
	</Box>;

export default Tabs;
