import { configureStore } from '@reduxjs/toolkit';
import githubReducer from'./redux/reducers/githubSlice';

export const store = configureStore({
  reducer: {
    github: githubReducer,
  },
});
