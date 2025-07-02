import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push({
				id: Date.now(),
				text: action.payload,
				completed: false,
			});
		},
		setTodos: (_, action) => {
			return action.payload;
		},
		removeTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
		toggleTodo: (state, action) => {
			const todo = state.find((t) => t.id === action.payload);
			if (todo) todo.completed = !todo.completed;
		},
		editTodo: (state, action) => {
			const { id, newText } = action.payload;
			const todo = state.find((t) => t.id === id);
			if (todo) todo.text = newText;
		},
		clearTodos: () => [],
		fetchTodosRequest: () => {},
	},
});

export const {
	addTodo,
	setTodos,
	removeTodo,
	toggleTodo,
	editTodo,
	clearTodos,
	fetchTodosRequest,
} = todoSlice.actions;

export default todoSlice.reducer;
