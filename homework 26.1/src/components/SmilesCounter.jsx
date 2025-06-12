import useSmileImages from "../hooks/UseSmileImahes";

const smileImages = useSmileImages();
const SmilesCounter = ({ counts, increment, findWinners }) => {
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
				<button onClick={findWinners}>Show Results</button>
			</div>
		</div>
	);
};

export default SmilesCounter;
