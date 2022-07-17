import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchAsyncGithub } from '../redux/reducers/githubSlice';
import GithubListing from './GithubListing';
import '../App.css'
import Navbar from '../Components/Navbar';

const GithubPage = () => {
	const dispatch = useDispatch();
	const searchDate = "2021-08-13";

  useEffect(() => {
		dispatch(fetchAsyncGithub(searchDate));
	}, [dispatch]);

	return (
		<div className="gitpage-contain">
			<Navbar />
			<div className="p-contain">
				<GithubListing />
			</div>
		</div>
	)
}

export default GithubPage
