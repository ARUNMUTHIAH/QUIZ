/* eslint-disable max-lines-per-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from '../../AboutUs';
import HomePage from '../HomePage';
import Quiz from '../..';
import FAQs from '../../FAQs';
import SignUpAction from '../SignUp';

const Router = (context) =>
	<Routes>
		<Route
			path="/"
			element={ <Quiz { ...context }/> }
		/>
		<Route
			path="/AboutUs"
			element={ <AboutUs { ...context }/> }
		/>
		<Route
			path="/HomePage"
			element={ <HomePage { ...context }/> }
		/>
		<Route
			path="/FAQs"
			element={ <FAQs { ...context }/> }
		/>
		<Route
			path="/SignUp"
			element={ <SignUpAction { ...context }/> }
		/>
	</Routes>;

export default Router;
