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
			} else if (values.task.trim().length < 2) {
				errors.task = "Мінімум 2 символи";
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
			<h2>ToDo List</h2>
			<form onSubmit={formik.handleSubmit}>
				<div className="formContainer">
					<input
						className="inputTask"
						type="text"
						name="task"
						value={formik.values.task}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<button className="addTask" type="submit">
						Додати
					</button>
				</div>

				{formik.touched.task && formik.errors.task && (
					<div className="errorMessage">{formik.errors.task}</div>
				)}
			</form>

			<ul className="todoList">
				{tasks.map((task) => (
					<li key={task.id} className="task">
						<input
							type="checkbox"
							className="checkboxTask"
							checked={task.completed}
							onChange={() => completeToggle(task.id)}
						/>
						<span
							className="taskText"
							style={{
								textDecoration: task.completed
									? "line-through"
									: "none",
							}}>
							{task.text}
						</span>
						<button
							className="removeTask"
							onClick={() => deleteTask(task.id)}>
							Видалити
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default ToDoList;
