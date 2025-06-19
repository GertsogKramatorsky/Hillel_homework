import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux-toolkit/counterSlice";

function App() {
	const value = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<div>
				<h2>value: {value}</h2>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>
		</>
	);
}

export default App;
