import React from 'react';

const CategoriesList = (context) => {
	const { config: { categories }, setState, state, userInfo } = context;

	return (
		<select
			onChange={ ({ target: { value }}) => setState({ ...state,
				userInfo: { ...userInfo, name: value }}) }
		>
			{categories.map((category, key) =>
				<option
					key={ key }
					value={ category.name }
				>{category.name}</option>)}
		</select>);
};

export default CategoriesList;
