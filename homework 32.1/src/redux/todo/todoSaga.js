import { call, put, takeEvery } from "redux-saga/effects";
import { setTodos, fetchTodosRequest } from "./todoSlice";

function* fetchTodos() {
	try {
		const res = yield call(
			fetch,
			"https://jsonplaceholder.typicode.com/todos?_limit=5"
		);
		const data = yield res.json();
		const todos = data.map((todo) => ({
			id: todo.id,
			text: todo.title,
			completed: todo.completed,
		}));
		yield put(setTodos(todos));
	} catch (err) {
		console.error("Fetch error", err);
	}
}

export default function* rootSaga() {
	yield takeEvery(fetchTodosRequest.type, fetchTodos);
}
