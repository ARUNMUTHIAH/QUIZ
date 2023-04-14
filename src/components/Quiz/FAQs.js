/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () =>
	<Box className="faqs">
		<h1 className="aboutUsLabel">FAQs</h1>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				Question : Is this website free or do I have to pay to access the quizzes?
			</AccordionSummary>
			<AccordionDetails>
				Answer : The website is free. You can access quizzes and practice tests with your free account
			</AccordionDetails>
		</Accordion>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				Question : Can I print, copy or email my Quiz questions?
			</AccordionSummary>
			<AccordionDetails>
				Answer :No
			</AccordionDetails>
		</Accordion>
		<Accordion>
			<AccordionSummary
				expandIcon={ <ExpandMoreIcon/> }
			>
				Question :Can I take a practice test more than once?
			</AccordionSummary>
			<AccordionDetails>
				Answer : Yes
			</AccordionDetails>
		</Accordion>
	</Box>;

export default FAQs;
