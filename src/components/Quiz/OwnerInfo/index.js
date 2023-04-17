import { Box } from '@mui/material';
import React from 'react';
import Add from './Buttons/Add';
import Start from '../UserInfo/FrontScreen/Buttons/Start';
import Answer from './Inputs/Answer';
import CategoryList from './DropDown/CategoryList';
import Options from './Inputs/Options';
import Question from './Inputs/Question';

const OwnerInfo = (context) =>
	<Box className="ownerInfo">
		<Question { ...context }/>
		<Options { ...context }/>
		<Answer { ...context }/>
		<Add { ...context }/>
		<CategoryList { ...context }/>
		<Start { ...context }/>
	</Box>;

export default OwnerInfo;
