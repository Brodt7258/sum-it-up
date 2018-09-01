import React from 'react';
import styled from 'styled-components';
import AnswerGrid from './AnswerGrid';
import Answer from './Answer';
import Target from './Target';
import { getSumObject } from '../utils/helpers';

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

	state = getSumObject();

	render() {
		const { sum, numbers } = this.state;
		return (
			<Container>
				<Card>
					<Target>
						{sum}
					</Target>
					<AnswerGrid>
						{
							numbers.map((n, i) => <Answer number={n} key={i} />)
						}
					</AnswerGrid>
				</Card>
			</Container>
		);
	}
}

export default App;
