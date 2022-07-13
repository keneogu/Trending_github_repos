import { createSlice } from '@reduxjs/toolkit';
// import {githubAPI} from '../../Api/api';

const initialState = {
	github: {},
};

const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		getGithhub: (state,{ payload }) => {
			state.github = payload;
		}
	}
});

// console.log(githubSlice);
export const {getGithhub} = githubSlice.actions;
export const getAllGithub = (state) => state.github;
export default githubSlice.reducer;
