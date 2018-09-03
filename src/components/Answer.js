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
	cursor: ${({ running }) => running ? 'pointer' : 'default' };
	-webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;     
`;	

class Answer extends React.Component {
	
	state = {
		selected: false
	}

	componentDidUpdate() {
		//When App toggles 'reset' flag, deselect component
		const { reset } = this.props;
		if (reset) {
			this.setState({ selected: false });
		}
	}

	handleClick = () => {
		const { handleSelect, number, running } = this.props;
		const { selected } = this.state;

		//allow interaction only if game is running
		if (running) {
			//if it's already been selected, pass back the negative value to revert to previous state
			handleSelect(selected ? -number : number);
			this.setState(prev => ({ selected: !prev.selected }));
		}
	}

	render() {
		const { number, running } = this.props;
		const { selected } = this.state;

		return (
			<StyledAnswer selected={selected} running={running} onClick={this.handleClick}>
				{number}
			</StyledAnswer>
		);
	}
}

export default Answer;