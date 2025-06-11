import { Component } from "react";
import "./App.css";
import SmilesCounter from "./components/SmileCounter";
import Results from "./components/Results";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counts: {
				happy: 0,
				shy: 0,
				glasses: 0,
				stars: 0,
				hearts: 0,
			},
			winner: null,
		};
	}

	increment = (type) => {
		this.setState((prevState) => ({
			counts: {
				...prevState.counts,
				[type]: prevState.counts[type] + 1,
			},
		}));
	};

	findWinner = () => {
		const { counts } = this.state;

		let maxVotes = Math.max(...Object.values(counts));
		const winners = Object.keys(counts).filter(
			(key) => counts[key] === maxVotes
		);

		this.setState({ winner: winners });
	};

	render() {
		return (
			<div>
				<SmilesCounter
					counts={this.state.counts}
					increment={this.increment}
					findWinner={this.findWinner}
				/>
				<Results
					winner={this.state.winner}
					counts={this.state.counts}
				/>
			</div>
		);
	}
}

export default App;
