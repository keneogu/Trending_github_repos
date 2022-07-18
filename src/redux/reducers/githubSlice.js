import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {API_ENDPOINT, API_BASE, PARAM_SEARCH, API_SORT, PARAM_ORDER, PARAM_PAGE} from '../../Api/api';
import axios from 'axios';


export const fetchAsyncGithub = createAsyncThunk("github/fetchAsyncGithub", async (searchTerm,pageCount) => {
	try {
		const response = await axios.get(`${API_BASE}?${PARAM_SEARCH}${searchTerm}&${API_SORT}&${PARAM_ORDER}&${PARAM_PAGE}${pageCount}`);
		console.log(response.data);
		return response.data;
	}catch(error) {
		return error;
	}
});

const initialState = {
	github: {},
	isLoading: false,
};

const githubSlice = createSlice({
	name: 'github',
	initialState,
	extraReducers: {
		[fetchAsyncGithub.pending]: (state) => {
			state.isLoading = true;
			console.log("Pending");
		},
		[fetchAsyncGithub.fulfilled]: (state, { payload }) => {
			console.log("fetched successfully");
			state.isLoading = false;
			state.github = payload;
		},
		[fetchAsyncGithub.rejected]: (state) => {
			state.isLoading = false;
			console.log("Rejected");
		},
	},
});

export const getAllGithub = (state) => state.github;
export default githubSlice.reducer;
