import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import counterReducer from "./counterSlice";

const store = configureStore({
	reducer: {
		task: taskReducer,
		counter: counterReducer,
	},
});

export default store;
