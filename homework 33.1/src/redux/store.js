import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./todo/todoSlice";
import infoReducer from "./swapi/infoSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		todo: todoReducer,
		info: infoReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
