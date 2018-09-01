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
	background-color: ${({ selected }) => selected ? 'black' : '#eee'};
	color: ${({ selected }) => selected ? '#eee' : 'black'};
	min-width: 3rem;
	line-height: 2.5rem;
	cursor: ${({ victory }) => victory ? 'default' : 'pointer' };
	-webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;     
`;	

class Answer extends React.Component {
	
	state = {
		selected: false
	}

	componentDidUpdate({ victory : prevVictory }) {
		//if the gameover condition has switched from true to false (when starting a new round), deselect the component
		const { victory } = this.props;
		if (prevVictory === true && victory === false) {
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
		const { number, victory } = this.props;
		const { selected } = this.state;

		return (
			<StyledAnswer selected={selected} victory={victory} onClick={this.handleClick}>
				{number}
			</StyledAnswer>
		);
	}
}

export default Answer;