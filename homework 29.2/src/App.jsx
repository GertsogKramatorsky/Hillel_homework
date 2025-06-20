import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux-toolkit/taskSlice";
import TaskList from "./components/TaskList";
import { increment } from "./redux-toolkit/counterSlice";
import Counter from "./components/Counter";

function App() {
	const [text, setText] = useState("");
	const dispatch = useDispatch();

	function handleClick() {
		if (text.trim()) {
			dispatch(addTask(text));
			dispatch(increment());
			setText("");
		}
	}
	return (
		<>
			<div className="container">
				<h1>TODO</h1>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						id="task"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<button className="btn btn-primary" onClick={handleClick}>
						Add
					</button>
				</div>
				<h2>TODOS</h2>
				<TaskList />
				<Counter />
			</div>
		</>
	);
}

export default App;
