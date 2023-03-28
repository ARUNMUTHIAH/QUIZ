import React from 'react';

const CategoriesList = (context) => {
	const { config: { categories }, setState, state } = context;

	return (
		<select
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
		</select>);
};

export default CategoriesList;
