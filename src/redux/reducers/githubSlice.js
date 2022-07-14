import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { githubAPI } from '../../Api/api';
import axios from 'axios';
// import { getGithhub } from '../redux/reducers/githubSlice';


export const fetchAsyncGithub = createAsyncThunk("github/fetchAsyncGithub", async () => {
	try {
		const response = await axios.get('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc');
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
			state.isLoading = false;
			console.log("fetched successfully");
			state.github = payload
		},
		[fetchAsyncGithub.rejected]: (state) => {
			state.isLoading = false;
			console.log("Rejected");
		},
	},
});

// console.log(githubSlice);
// export const {getGithhub} = githubSlice.actions;
export const getAllGithub = (state) => state.github.github;
console.log(getAllGithub);
export default githubSlice.reducer;
