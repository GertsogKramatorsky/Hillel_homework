import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./todoSlice";
import rootSaga from "./todoSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		todo: todoReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
