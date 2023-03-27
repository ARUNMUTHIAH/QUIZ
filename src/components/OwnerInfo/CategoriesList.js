import React from 'react';

const CategoriesList = (context) => {
	const { config: { categories }} = context;

	return <select>
		{categories.map((category, key) =>
			<option
				key={ key }
				value={ category.name }
			>{category.name}</option>)}
	</select>;
};

export default CategoriesList;
