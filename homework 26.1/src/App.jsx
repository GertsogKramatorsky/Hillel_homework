import { useState } from "react";
import SmilesCounter from "./components/SmilesCounter";
import Results from "./components/Results";
import "./App.css";

const App = () => {
	const [counts, setCounts] = useState({
		happy: 0,
		shy: 0,
		glasses: 0,
		stars: 0,
		hearts: 0,
	});
	const [winners, setWinners] = useState([]);

	const increment = (type) => {
		setCounts((prev) => ({
			...prev,
			[type]: prev[type] + 1,
		}));
	};

	const findWinners = () => {
		const max = Math.max(...Object.values(counts));
		const winnersList = Object.keys(counts).filter(
			(key) => counts[key] === max
		);
		setWinners(winnersList);
	};

	return (
		<div>
			<SmilesCounter
				counts={counts}
				increment={increment}
				findWinners={findWinners}
			/>
			<Results winners={winners} counts={counts} />
		</div>
	);
};

export default App;
