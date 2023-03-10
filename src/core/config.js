/* eslint-disable max-len */
const config = {
	inputData: { question: '', options: [], answer: '' },
	quizData: [
		{
			question: 'Which one of the following is not a Javascript framework?',
			options: ['Node', 'Vue', 'Flutter'],
			answer: 'Flutter',
		},
		{
			question: 'In which country did cricket originate?',
			options: ['England', 'South Africa', 'Australia'],
			answer: 'England',
		},
		{
			question: 'How do you make the number one disappear?',
			options: ['D', 'C', 'G'],
			answer: 'G',
		},
		{
			question: 'Which movie did Vijay and Ajith act together?',
			options: ['3 idiots', 'Rajavin Parvaiyile', 'Selva'],
			answer: 'Rajavin Parvaiyile',
		},
		{
			question: 'If two’s company and three’s a crowd,what do four and five make?',
			options: ['Twelve', 'Five', 'Nine'],
			answer: 'Nine',
		},
	],
	categories: [
		{
			name: 'CRICKET',
			image: '/img/cricket.png',
		},
		{
			name: 'FUNNY',
			image: '/img/funny.png',
		},
		{
			name: 'MATHS',
			image: '/img/maths.png',
		},
		{
			name: 'GK',
			image: '/img/gk.png',
		},
		{
			name: 'JAVASCRIPT',
			image: '/img/js.png',
		},
		{
			name: 'FOOD',
			image: '/img/food.png',
		},
	],
};

export default config;
