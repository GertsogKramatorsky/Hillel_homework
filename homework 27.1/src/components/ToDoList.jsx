import { useState } from "react";
import { useFormik } from "formik";

const ToDoList = () => {
	const [tasks, setTasks] = useState([]);

	const formik = useFormik({
		initialValues: {
			task: "",
		},
		validate: (values) => {
			const errors = {};
			if (!values.task.trim()) {
				errors.task = "Поле не може бути порожнім";
			} else if (values.task.trim().length < 5) {
				errors.task = "Мінімум 5 символів";
			}
			return errors;
		},
		onSubmit: (values, { resetForm }) => {
			const newTask = {
				id: Date.now(),
				text: values.task.trim(),
				completed: false,
			};

			setTasks([...tasks, newTask]);
			resetForm();
		},
	});

	const deleteTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	const completeToggle = (id) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<>
			<h2 className="mx-auto p-2" style={{ width: "200px" }}>
				ToDo List
			</h2>
			<form onSubmit={formik.handleSubmit}>
				<div className="input-group mb-3">
					<input
						className="form-control"
						type="text"
						name="task"
						value={formik.values.task}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<button className="btn btn-outline-primary" type="submit">
						Add
					</button>
				</div>

				{formik.touched.task && formik.errors.task && (
					<div className="text-danger">{formik.errors.task}</div>
				)}
			</form>

			<ul className="list-group">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="list-group-item d-flex justify-content-between">
						<input
							type="checkbox"
							className="form-check-input me-1 align-self-center"
							checked={task.completed}
							onChange={() => completeToggle(task.id)}
						/>
						<span
							className="align-self-center"
							style={{
								textDecoration: task.completed
									? "line-through"
									: "none",
							}}>
							{task.text}
						</span>
						<button
							className="btn btn-danger"
							onClick={() => deleteTask(task.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default ToDoList;
