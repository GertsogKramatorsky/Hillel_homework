import { Component } from "react";
import happy from "../assets/happy.png";
import shy from "../assets/shy.png";
import glasses from "../assets/glasses.png";
import stars from "../assets/stars.png";
import hearts from "../assets/hearts.png";

const smileImages = {
	happy,
	shy,
	glasses,
	stars,
	hearts,
};

class SmilesCounter extends Component {
	render() {
		const { counts, increment, findWinner } = this.props;

		return (
			<div>
				<section className="smilesCounter">
					{Object.keys(smileImages).map((key) => (
						<div className="smile-container" key={key}>
							<img
								src={smileImages[key]}
								alt={key}
								onClick={() => increment(key)}
							/>
							<span className="smileCounts">{counts[key]} </span>
						</div>
					))}
				</section>
				<div className="results-button">
					<button onClick={findWinner}>Show Results</button>
				</div>
			</div>
		);
	}
}

export default SmilesCounter;
