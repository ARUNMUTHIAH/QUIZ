import React from 'react';

const Image = (context) => {
	const { data: category } = context;

	return (
		<img
			className="categoryImage"
			src={ category.image }
			alt="noImage"
			height="80%"
			width="80%"
		/>);
};

export default Image;
