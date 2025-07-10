import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	result: null,
	error: null,
};

const infoSlice = createSlice({
	name: "info",
	initialState,
	reducers: {
		fetchInfoData: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchInfoDataSuccess: (state, action) => {
			state.loading = false;
			state.result = action.payload;
		},
		fetchInfoDataFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		clearInfo: () => initialState,
	},
});

export const {
	fetchInfoData,
	fetchInfoDataSuccess,
	fetchInfoDataFailure,
	clearInfo,
} = infoSlice.actions;

export default infoSlice.reducer;
