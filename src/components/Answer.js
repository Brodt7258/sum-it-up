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
	background-color: ${props => props.selected ? 'black' : '#eee'};
	color: ${props => props.selected ? '#eee' : 'black'};
	min-width: 3rem;
	line-height: 2.5rem;
	cursor: pointer;
`;	

class Answer extends React.Component {
	
	state = {
		selected: false
	}

	componentDidUpdate({ number : prevNumber}) {
		//if the number prop changed (such as when starting a new game), deselect the component
		const { number } = this.props;
		if (number !== prevNumber) {
			this.setState({ selected: false });
		}
	}

	handleClick = () => {
		const { handleSelect, number, victory } = this.props;
		const { selected } = this.state;

		//if game is over, lock interaction
		if (!victory) {
			handleSelect(selected ? -number : number);
			this.setState(prev => ({ selected: !prev.selected }));
		}
	}

	render() {
		const { number } = this.props;
		const { selected } = this.state;

		return (
			<StyledAnswer selected={selected} onClick={this.handleClick}>
				{number}
			</StyledAnswer>
		);
	}
}

export default Answer;