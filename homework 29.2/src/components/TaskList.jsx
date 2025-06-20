import { useSelector } from "react-redux";
function TaskList() {
	const tasks = useSelector((state) => state.task);
	return (
		<>
			<ul className="list-group">
				{tasks.map((task) => (
					<li key={task.id} className="list-group-item mb-3">
						{task.text}
					</li>
				))}
			</ul>
		</>
	);
}

export default TaskList;
