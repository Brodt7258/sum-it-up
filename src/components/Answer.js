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
	background-color: ${props => props.selected ? 'red' : '#eee'};
	color: ${props => props.selected ? '#eee' : 'black'};
	min-width: 3rem;
	line-height: 2.5rem;
	cursor: pointer;
`;	

class Answer extends React.Component {
	
	state ={
		selected: false
	}

	handleClick = () => {
		const { handleSelect, number } = this.props;
		const { selected } = this.state;

		handleSelect(selected ? -number : number);
		this.setState(prev => ({ selected: !prev.selected }));
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