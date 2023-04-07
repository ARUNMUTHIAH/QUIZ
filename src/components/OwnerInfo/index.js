import { Box } from '@mui/material';
import React from 'react';
import CommonAdd from '../CommonAdd';
import Start from '../FrontScreen/Buttons/Start';
import Answer from './Answer';
import CategoriesList from './CategoriesList';
import Options from './Options';
import Question from './Question';

const OwnerInputs = (context) =>
	<Box className="ownerInputs">
		<Question { ...context }/>
		<Options { ...context }/>
		<Answer { ...context }/>
		<CommonAdd { ...context }/>
		<CategoriesList { ...context }/>
		<Start { ...context }/>
	</Box>;

export default OwnerInputs;
