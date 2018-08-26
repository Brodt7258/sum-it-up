import React from 'react';
import styled from 'styled-components';

const StyledAnswerGrid = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;
	margin: 0 3rem 8rem 3rem;
	`;

 const AnswerGrid = ({ children }) => {
	return (
		<StyledAnswerGrid>
			{children}
		</StyledAnswerGrid>
	);
}

export default AnswerGrid;