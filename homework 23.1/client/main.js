const addBtnEl = document.querySelector(".form__btn");
const deleteBtnsEl = document.querySelectorAll(".todo-item__delete");
const ulEl = document.querySelector(".js--todos-wrapper");
const inputEl = document.querySelector(".js--form__input");

function ToDoList() {
	this.tasks = [];

	this._create = function () {
		const taskText = inputEl.value.trim();
		if (!taskText) return;

		fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text: taskText, completed: false }),
		})
			.then((res) => res.json())
			.then((newTodo) => {
				this.tasks.push(newTodo);
				this._renderTask(newTodo);
				inputEl.value = "";
			})
			.catch((err) => console.error("Помилка створення таска:", err));
	};

	this._renderTask = function (task) {
		const newLiEl = document.createElement("li");
		newLiEl.classList.add("todo-item");
		if (task.completed) {
			newLiEl.classList.add("todo-item--checked");
		}
		newLiEl.dataset.id = task.id;

		newLiEl.innerHTML = `
			<input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}>
			<span class="todo-item__description">${task.text}</span>
			<button class="todo-item__delete">Видалити</button>
		`;
		ulEl.appendChild(newLiEl);
	};

	this._delete = function (event) {
		if (event.target.classList.contains("todo-item__delete")) {
			const liEl = event.target.parentElement;
			const id = liEl.dataset.id;

			fetch(`http://localhost:3000/todos/${id}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (!res.ok) throw new Error("Помилка видалення");
					this.tasks = this.tasks.filter((task) => task.id != id);
					liEl.remove();
				})
				.catch((err) => console.error(err));
		}
	};

	this._checked = function (event) {
		if (event.target.classList.contains("checkbox")) {
			const liEl = event.target.parentElement;
			const id = liEl.dataset.id;
			const checked = event.target.checked;

			fetch(`http://localhost:3000/todos/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ completed: checked }),
			})
				.then((res) => res.json())
				.then((updatedTask) => {
					const index = this.tasks.findIndex((t) => t.id == id);
					if (index !== -1) {
						this.tasks[index].completed = updatedTask.completed;
					}
					if (updatedTask.completed) {
						liEl.classList.add("todo-item--checked");
					} else {
						liEl.classList.remove("todo-item--checked");
					}
				})
				.catch((err) =>
					console.error("Помилка оновлення статусу:", err)
				);
		}
	};

	this._renderAllTasks = function () {
		ulEl.innerHTML = "";
		fetch("http://localhost:3000/todos")
			.then((res) => res.json())
			.then((data) => {
				this.tasks = data;
				this.tasks.forEach((task) => this._renderTask(task));
			})
			.catch((err) => console.error("Помилка отримання тасків:", err));
	};
}

const MyToDoList = new ToDoList();
MyToDoList._renderAllTasks();

addBtnEl.addEventListener("click", function (event) {
	event.preventDefault();
	MyToDoList._create();
});

ulEl.addEventListener("click", function (event) {
	MyToDoList._delete(event);
	MyToDoList._checked(event);
});
