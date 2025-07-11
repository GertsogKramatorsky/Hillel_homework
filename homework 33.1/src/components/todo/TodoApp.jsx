import React from "react";
import {
	Button,
	TextField,
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	IconButton,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
	addTodo,
	removeTodo,
	toggleTodo,
	editTodo,
	clearTodos,
	fetchTodosRequest,
} from "../../redux/todo/todoSlice";
import { useState } from "react";

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
		<Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Todo App
			</Typography>

			<Box sx={{ display: "flex", gap: 2, mb: 3 }}>
				<TextField
					fullWidth
					placeholder="Add or edit todo"
					variant="outlined"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button variant="contained" onClick={handleAdd}>
					{editId ? "Save" : "Add"}
				</Button>
			</Box>

			<Box sx={{ display: "flex", gap: 2, mb: 4 }}>
				<Button
					variant="outlined"
					color="success"
					onClick={() => dispatch(fetchTodosRequest())}>
					Load Todos
				</Button>
				<Button
					variant="outlined"
					color="error"
					onClick={() => dispatch(clearTodos())}>
					Clear All
				</Button>
			</Box>

			<List>
				{todos.map((todo) => (
					<ListItem
						key={todo.id}
						secondaryAction={
							<>
								<IconButton
									edge="end"
									aria-label="edit"
									onClick={() => {
										setText(todo.text);
										setEditId(todo.id);
									}}>
									<Edit />
								</IconButton>
								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() =>
										dispatch(removeTodo(todo.id))
									}>
									<Delete />
								</IconButton>
							</>
						}
						sx={{
							textDecoration: todo.completed
								? "line-through"
								: "none",
							cursor: "pointer",
						}}
						onClick={() => dispatch(toggleTodo(todo.id))}>
						<ListItemText primary={todo.text} />
					</ListItem>
				))}
			</List>
		</Box>
	);
}

export default TodoApp;
