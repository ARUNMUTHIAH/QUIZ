import { Box } from '@mui/material';
import React from 'react';

const CategoryList = (context) => {
	const { config: { categories }, setState, state } = context;

	return (
		<Box className="categoriesList">
			<select
				style={ { height: '50px', width: '130px' } }
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
		</Box>);
};

export default CategoryList;
