import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import HouseIcon from '@mui/icons-material/House';
import RestoreIcon from '@mui/icons-material/Restore';
import PeopleIcon from '@mui/icons-material/People';

const style = () =>
	({ fontSize: 'x-large',
		fontWeight: 'bold' });

const Tabs = () =>
	<Box className="tabs">
		<TabContext>
			<TabList>
				<HouseIcon/>
				<Tab
					sx={ style() }
					label="Home"
				/> <RestoreIcon/>
				<Tab
					sx={ style() }
					label="Activity"
				/> <PeopleIcon/>
				<Tab
					sx={ style() }
					label="Classes"
				/>
			</TabList>
		</TabContext>
	</Box>;

export default Tabs;
