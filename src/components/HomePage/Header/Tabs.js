import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import HouseIcon from '@mui/icons-material/House';

const style = () =>
	({ fontSize: 'x-large',
		fontWeight: 'bold' });

const Tabs = () =>
	<Box className="tabs">
		<TabContext>
			<TabList>
				<HouseIcon sx={ { marginTop: '13px' } }/>
				<Tab
					sx={ style() }
					label="Home"
				/>
			</TabList>
		</TabContext>
	</Box>;

export default Tabs;
