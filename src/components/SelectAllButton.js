import React from 'react';
import OwnerButton from './OwnerButton';
import SelectedComponents from './SelectedComponents';
import UserButton from './Theme/UserButton';

const SelectAllButton = (context) => {
	const { state: { role }} = context;

	return (
		role === ''
			? <div><OwnerButton { ...context }/>
				<UserButton { ...context }/></div>
			: <SelectedComponents{ ...context }/>);
};

export default SelectAllButton;
