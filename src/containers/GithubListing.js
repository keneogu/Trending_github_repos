import React from 'react'
import { useSelector } from "react-redux";
import { getAllGithub } from '../redux/reducers/githubSlice';

import '../App.css';

const GithubListing = () => {
	const { github } = useSelector(getAllGithub);


	return (
		<div className="git-contain">
			
		</div>
	)
}

export default GithubListing
