/* eslint-disable max-len */
const config = {
	inputData: { question: '', options: [], answer: '' },
	categories: [
		{
			name: 'cricket',
			image: '/img/cricket.png',
			id: 0,
			isComplete: false,
			quizData: [{
				question: 'In which country did cricket originate?',
				options: ['England', 'South Africa', 'Australia'],
				answer: 'England',
			},
			{
				question: 'What is the highest individual score in an innings in a test match and who holds that record?',
				options: ['400* Brian Lara', '375 Brian Lara', '380 Matthew Hayden', '402 Matthew Hayden'],
				answer: '400* Brian Lara',
			},
			{
				question: 'Which Asian country won the cricket World Cup twice?',
				options: ['Pakistan', 'Bangladesh', 'Sri Lanka', 'India'],
				answer: 'India',
			},
			{
				question: 'Who holds the record for best bowling performance in a test match?',
				options: ['Anil Kumble', 'Jim Laker', 'Dennis Lillee', 'Michael Holding'],
				answer: 'Jim Laker',
			},
			{
				question: 'What is the highest score in a test innings?',
				options: ['864 runs', '918 runs', '952 runs', '794 runs'],
				answer: '952 runs',
			}],
		},
		{
			name: 'funny',
			image: '/img/funny.png',
			id: 1,
			isComplete: false,
			quizData: [{
				question: 'How do you make the number one disappear?',
				options: ['D', 'C', 'G'],
				answer: 'G',
			},
			{
				question: 'If two’s company and three’s a crowd,what do four and five make?',
				options: ['Twelve', 'Five', 'Nine'],
				answer: 'Nine',
			},
			{
				question: 'What has four eyes but can’t see?',
				options: ['Jawless lamprey', 'Mississippi', 'Four Eyed Opossum', 'None of the above'],
				answer: 'Mississippi',
			},
			{
				question: 'Can you make SEVEN an even number?',
				options: ['Yes', 'No'],
				answer: 'Yes',
			},
			{
				question: 'What is yours, but is used much more often by your friends?',
				options: ['Bike', 'Credit Card', 'Dress', 'None of the above'],
				answer: 'None of the above',
			}],
		},
		{
			name: 'maths',
			image: '/img/maths.png',
			id: 2,
			isComplete: false,
			quizData: [
				{
					question: '60 Times of 8 Equals to ?',
					options: ['480', '300', '250', '400'],
					answer: '480',
				},
				{
					question: 'Find the Missing Term in Multiples of 6 : 6, 12, 18, 24, _, 36, 42, _ 54, 60 ?',
					options: ['32, 45', '30, 48', '24, 40', '25, 49'],
					answer: '30, 48',
				},
				{
					question: 'What is the Next Prime Number after 7 ?',
					options: ['13', '12', '14', '11'],
					answer: '11',
				},
				{
					question: 'How Many Years are there in a Decade ?',
					options: ['5 years', '10years', '15 years', '20 years'],
					answer: '10years',
				},
				{
					question: 'How Many Months Make a Century ?',
					options: ['12', '120', '1200', '12000'],
					answer: '1200',
				},
			],
		},
		{
			name: 'gk',
			image: '/img/gk.png',
			id: 3,
			isComplete: false,
			quizData: [
				{
					question: 'For which of the following disciplines is Nobel Prize awarded ?',
					options: ['Physics and Chemistry', 'Physiology or Medicine', 'Literature, Peace and Economics', 'All of the above'],
					answer: 'All of the above',
				},
				{
					question: 'In which year of First World War Germany declared war on Russia and France?',
					options: ['1914', '1915', '1916', '1917'],
					answer: '1914',
				},
				{
					question: 'ICAO stands for?',
					options: ['International Civil Aviation Organization', 'Indian Corporation of Agriculture Organization', 'Institute of Company of Accounts Organization', 'None of the above'],
					answer: 'International Civil Aviation Organization',
				},
				{
					question: 'India has largest deposits of __ in the world?',
					options: ['gold', 'copper', 'mica', 'None of the above'],
					answer: 'mica',
				},
				{
					question: 'How many Lok Sabha seats belong to Rajasthan?',
					options: ['32', '25', '30', '17'],
					answer: '25',
				},
			],
		},
		{
			name: 'javaScript',
			image: '/img/js.png',
			id: 4,
			isComplete: false,
			quizData: [{
				question: 'Can you pass a anonymous function as an argument to another function?',
				options: ['true', 'false'],
				answer: 'true',
			},
			{
				question: 'Which built-in method returns the character at the specified index?',
				options: ['characterAt()', 'getCharAt()', 'charAt()', 'none of the above'],
				answer: 'charAt()',
			},
			{
				question: 'Which of the following function of Array object adds one or more elements to the front of an array and returns the new length of the array?',
				options: ['unshift()', 'sort()', 'splice()', 'toString()'],
				answer: 'unshift()',
			},
			{
				question: 'How to stop an interval timer in Javascript?',
				options: ['clearInterval', 'clearTimer', 'intervalOver', 'none of the above'],
				answer: 'clearInterval',
			},
			{
				question: 'Which of the following methods/operation does javascript use instead of == and !=?',
				options: [' JavaScript uses equalto()', 'JavaScript uses equals() and notequals() instead', 'JavaScript uses bitwise checking', 'JavaScript uses === and !== instead'],
				answer: 'JavaScript uses === and !== instead',
			}],
		},
		{
			name: 'food',
			image: '/img/food.png',
			id: 5,
			isComplete: false,
			quizData: [{
				question: 'Where does coffee originate from?',
				options: ['Canada', 'Italy', 'Ethiopia', 'None of these'],
				answer: 'Ethiopia',
			},
			{
				question: 'Which state is largest producer of wheat?',
				options: ['Uttar Pradesh', 'Rajasthan', 'Assam', 'None of these'],
				answer: 'Uttar Pradesh',
			},
			{
				question: 'Where did rice originally come from?',
				options: ['India', 'Italy', 'China', 'None of these'],
				answer: 'China',
			},
			{
				question: 'Which state is known as Apple state of India?',
				options: ['Jammu and Kashmir', 'Uttar Pradesh', 'Himachal Pradesh', 'None of these'],
				answer: 'Himachal Pradesh',
			},
			{
				question: 'The Chinese gooseberry fruit is also known as?',
				options: ['Kiwi Fruit', 'Dragon Fruit', 'Rambutans', 'Lychee'],
				answer: 'Kiwi Fruit',
			}],
		},
		{
			name: 'suggestion',
			image: '/img/js.png',
			id: 6,
			isComplete: false,
			quizData: [{
				question: '',
				options: [],
				answer: '',
			}],
		},
	],
};

export default config;
