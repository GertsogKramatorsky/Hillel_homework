const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];
let nextId = 1;

app.get("/todos", (req, res) => {
	res.json(todos);
});

app.post("/todos", (req, res) => {
	const { text } = req.body;
	if (!text) return res.status(400).json({ error: "Текст обовʼязковий" });

	const newTodo = { id: nextId++, text, completed: false };
	todos.push(newTodo);
	res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
	const todoId = parseInt(req.params.id);
	const { text, completed } = req.body;

	const todo = todos.find((t) => t.id === todoId);
	if (!todo) return res.status(404).json({ error: "Задача не знайдена" });

	if (text !== undefined) todo.text = text;
	if (completed !== undefined) todo.completed = completed;

	res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
	const todoId = parseInt(req.params.id);
	todos = todos.filter((t) => t.id !== todoId);
	res.status(204).end();
});

app.listen(3000, () => {
	console.log(`Server is running on http://localhost:3000/todos`);
});
