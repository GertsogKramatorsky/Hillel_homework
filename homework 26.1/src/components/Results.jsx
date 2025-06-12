import useSmileImages from "../hooks/UseSmileImahes";

const smileImages = useSmileImages();
const Results = ({ winners, counts }) => {
	if (winners.length === 0) return null;

	return (
		<section className="results">
			<h3 className="resultsVoting">Результати голосування:</h3>
			<p className="theWinner">Переможець: </p>
			{winners.map((smile) => (
				<div key={smile}>
					<img src={smileImages[smile]} alt={smile} />
					<p>
						Кількість голосів — <b>{counts[smile]}</b>
					</p>
				</div>
			))}
		</section>
	);
};

export default Results;
