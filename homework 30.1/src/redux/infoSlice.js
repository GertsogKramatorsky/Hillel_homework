import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchInfoData = createAsyncThunk(
	"info/fetchInfoData",
	async (endpoint, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`https://www.swapi.tech/api/${endpoint}`
			);
			if (!response.ok) throw new Error("Invalid SWAPI endpoint");
			const data = await response.json();
			return data.result.properties;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const infoSlice = createSlice({
	name: "info",
	initialState: {
		info: [],
		loading: false,
		error: null,
	},
	reducers: {
		clearInfo: (state) => {
			state.result = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInfoData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchInfoData.fulfilled, (state, action) => {
				state.loading = false;
				state.result = action.payload;
			})
			.addCase(fetchInfoData.rejected, (state) => {
				state.loading = false;
				state.error = "Failed to fetch info";
			});
	},
});

export const { clearInfo } = infoSlice.actions;
export default infoSlice.reducer;
