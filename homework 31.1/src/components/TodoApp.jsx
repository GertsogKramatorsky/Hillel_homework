import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	addTodo,
	removeTodo,
	toggleTodo,
	editTodo,
	clearTodos,
	fetchTodosRequest,
} from "../redux/todoSlice";

function TodoApp() {
	const todos = useSelector((state) => state.todo);
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const [editId, setEditId] = useState(null);

	const handleAdd = () => {
		if (text.trim()) {
			if (editId) {
				dispatch(editTodo({ id: editId, newText: text }));
				setEditId(null);
			} else {
				dispatch(addTodo(text));
			}
			setText("");
		}
	};

	return (
		<>
			<h1 className="text-center mb-4">Todo App</h1>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="Add or edit todo"
				/>
				<button className="btn btn-primary" onClick={handleAdd}>
					{editId ? "Save" : "Add"}
				</button>
				<button
					className="btn btn-success"
					onClick={() => dispatch(fetchTodosRequest())}>
					Load Todos
				</button>
				<button
					className="btn btn-danger"
					onClick={() => dispatch(clearTodos())}>
					Clear All
				</button>
			</div>

			<ul className="list-group">
				{todos.map((todo) => (
					<li
						key={todo.id}
						className={`list-group-item d-flex justify-content-between align-items-center ${
							todo.completed ? "text-decoration-line-through" : ""
						}`}>
						<span onClick={() => dispatch(toggleTodo(todo.id))}>
							{todo.text}
						</span>
						<div>
							<button
								className="btn btn-sm btn-warning me-2"
								onClick={() => {
									setText(todo.text);
									setEditId(todo.id);
								}}>
								Edit
							</button>
							<button
								className="btn btn-sm btn-danger"
								onClick={() => dispatch(removeTodo(todo.id))}>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoApp;
