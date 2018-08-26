import React from 'react';
import styled from 'styled-components';
import AnswerGrid from './AnswerGrid';
import Answer from './Answer';
import Target from './Target';

const Container = styled.div`
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Card = styled.div`
	background-color: #dbd6cb;
	width: 50vw;
	height: 50vh;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	border-radius: 0.5rem;
	max-width: 25rem;
	min-width: 15rem;
	min-height: 15rem;
`;



class App extends React.Component {
	render() {
		return (
			<Container>
				<Card>
					<Target>
						42
					</Target>
					<AnswerGrid>
						<Answer>
							1
						</Answer>
						<Answer>
							2
						</Answer>
						<Answer>
							3
						</Answer>
						<Answer>
							4
						</Answer>
						<Answer>
							5
						</Answer>
						<Answer>
							6
						</Answer>
					</AnswerGrid>
				</Card>
			</Container>
		);
	}
}

export default App;
