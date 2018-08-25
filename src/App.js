import React from 'react';
import styled from 'styled-components';

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

const Target = styled.div`
	text-align: center;
	border: thin solid black;
	width: 40%;
	margin: 0 auto 0.5rem auto;
	background-color: #ADD8E6;
	border-radius: 0.25rem;
	font-size: 3rem;
	min-width: 10rem;
`;

const AnswerGrid = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	justify-items: center;
	align-items: center;
	margin: 0 3rem 8rem 3rem;
	`;

const Answer = styled.div`
	text-align: center;
	border: thin solid black;
	margin: 0.5rem auto;
	width: 60%;
	border-radius: 0.25rem;
	font-size: 2rem;
	background-color: #eee;
	min-width: 3rem;
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
