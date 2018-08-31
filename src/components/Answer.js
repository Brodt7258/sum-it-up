import React from 'react';
import styled from 'styled-components';

const StyledAnswer = styled.div`
	text-align: center;
	border: thin solid black;
	margin: 0.5rem auto;
	width: 60%;
	height: 2.5rem;
	border-radius: 0.25rem;
	font-size: 2rem;
	background-color: #eee;
	min-width: 3rem;
	line-height: 2.5rem;
`;	

const Answer = ({ children }) => {
	return (
		<StyledAnswer>
			{children}
		</StyledAnswer>
	);
}

export default Answer;