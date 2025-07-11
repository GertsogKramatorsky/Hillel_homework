import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import Todoapp from "../components/todo/TodoApp";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom";

function renderWithProvider(ui) {
	return render(<Provider store={store}>{ui}</Provider>);
}

describe("Todo Component", () => {
	it("1. Відображає заголовок TODO", () => {
		renderWithProvider(<Todoapp />);
		const heading = screen.getByRole("heading", { name: /todo app/i });
		expect(heading).toBeInTheDocument();
	});

	it("2. Дозволяє вводити цифри та букви в поле вводу", () => {
		renderWithProvider(<Todoapp />);
		const input = screen.getByPlaceholderText(/Add or edit todo/i);
		fireEvent.change(input, { target: { value: "Test123" } });
		expect(input.value).toBe("Test123");
	});

	it("3. Не додає новий todo, якщо поле порожнє", () => {
		renderWithProvider(<Todoapp />);
		const addButton = screen.getByRole("button", { name: /add/i });
		fireEvent.click(addButton);
		const listItems = screen.queryAllByRole("listitem");
		expect(listItems.length).toBe(0);
	});

	it('4. Додає новий todo після вводу тексту та натискання "Add"', () => {
		renderWithProvider(<Todoapp />);
		const input = screen.getByPlaceholderText(/Add or edit todo/i);
		const addButton = screen.getByRole("button", { name: /add/i });

		fireEvent.change(input, { target: { value: "Buy milk" } });
		fireEvent.click(addButton);

		const todoItem = screen.getByText("Buy milk");
		expect(todoItem).toBeInTheDocument();
	});

	it('5. Видаляє todo після натискання на кнопку "Delete"', () => {
		renderWithProvider(<Todoapp />);
		const input = screen.getByPlaceholderText(/Add or edit todo/i);
		const addButton = screen.getByRole("button", { name: /add/i });

		// Додавання
		fireEvent.change(input, { target: { value: "Go to gym" } });
		fireEvent.click(addButton);

		// Перевірка наявності
		const todoItem = screen.getByText("Go to gym");
		expect(todoItem).toBeInTheDocument();

		// Видалення
		const gymItem = screen.getByText("Go to gym").closest("li");
		const deleteButton = within(gymItem).getByRole("button", {
			name: /delete/i,
		});
		fireEvent.click(deleteButton);

		expect(screen.queryByText("Go to gym")).not.toBeInTheDocument();
	});
});
