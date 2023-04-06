/* eslint-disable max-lines-per-function */
import { Box } from '@mui/material';
import React from 'react';

const CategoriesList = (context) => {
	const { config: { categories }, setState, state } = context;

	return (
		<Box className="categoriesList">
			<select
				fontSize="100px"
				onChange={ ({ target: { value }}) =>
					setState({
						...state,
						dropDownList: value,
					}) }
			>
				{categories.map((category, key) =>
					<option
						key={ key }
						value={ category.name }
					>{category.name}</option>)}
			</select>
		</Box>
	);
};

export default CategoriesList;
