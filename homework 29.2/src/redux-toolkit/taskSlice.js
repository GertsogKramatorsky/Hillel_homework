import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
	name: "task",
	initialState: [],
	reducers: {
		addTask: (state, action) => {
			state.push({
				id: Date.now(),
				text: action.payload,
			});
		},
	},
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
