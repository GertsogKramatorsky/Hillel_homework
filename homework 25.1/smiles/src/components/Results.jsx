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
class Results extends Component {
	render() {
		const { winner, counts } = this.props;

		if (!winner) return null;

		return (
			<section className="results">
				<h3 className="resultsVoting">Результати голосування:</h3>
				<p className="theWinner">Переможець: </p>
				{winner.map((smile) => (
					<div key={smile}>
						<img src={smileImages[smile]} alt={smile} />
						<p>
							Кількість голосів — <b>{counts[smile]}</b>
						</p>
					</div>
				))}
			</section>
		);
	}
}

export default Results;
