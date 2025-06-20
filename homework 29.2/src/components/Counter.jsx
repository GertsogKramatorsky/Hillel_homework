import { useSelector } from "react-redux";

function Counter() {
	const counter = useSelector((state) => state.counter);
	return (
		<>
			<span>Total: {counter}</span>
		</>
	);
}

export default Counter;
