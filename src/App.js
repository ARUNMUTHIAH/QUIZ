import { React } from 'react';
import './App.scss';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Quiz/UserInfo/Router/Router';

const App = (context) =>
	<Box className="App">
		<BrowserRouter>
			<Router { ...context }/>
		</BrowserRouter>
	</Box>;

export default App;
