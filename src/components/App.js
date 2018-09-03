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

	state = {
		...getSumObject(),
		currentTotal: 0,
		running: false,
		reset: false
	};

	handleNumberSelect = (num) => {
		//add the selected number to the total, then test for victory
		this.setState(prev => ({ currentTotal: prev.currentTotal + num }), this.checkVictory);
	}

	checkVictory = () => {
		const { sum, currentTotal } = this.state;
		//if the player reaches the correct sum, stop the game, but do not yet reset it
		if(sum === currentTotal) {
			this.setState({ running: false });
		} 
	}

	resetGame = () => {
		//return game to beginning state
		//'reset' is briefly toggled to tell Answer components to deselect themselves
		this.setState({
			...getSumObject(),
			currentTotal: 0,
			running: false,
			reset: true
		}, () => this.setState({ reset: false }));
	}

	startGame = () => {
		this.setState({ running: true })
	}

	render() {
		const { sum, numbers, running, reset } = this.state;
		return (
			<Container>
				<Card>
					<Target>
						{sum}
					</Target>
					<AnswerGrid>
						{
							numbers.map((n, i) => (
								<Answer
									number={n}
									key={i}
									handleSelect={this.handleNumberSelect}
									running={running}
									reset={reset}
								/>
							))
						}
					</AnswerGrid>
					<button onClick={this.startGame} style={{ height: '2rem' }}>Start</button>
					<button onClick={this.resetGame} style={{ height: '2rem' }}>Reset</button>
					{running.toString()}
				</Card>
			</Container>
		);
	}
}

export default App;
