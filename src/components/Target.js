import React from 'react';
import styled from 'styled-components';

const StyledTarget = styled.div`
	text-align: center;
	border: thin solid black;
	width: 40%;
	margin: 0 auto 0.5rem auto;
	background-color: #ADD8E6;
	border-radius: 0.25rem;
	font-size: 3rem;
	min-width: 10rem;
	-webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;     
`;

const Target = ({ children }) => {
	return (
		<StyledTarget>
			{children}
		</StyledTarget>
	);
}

export default Target;