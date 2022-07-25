import React from 'react'
import { useSelector } from "react-redux";
import { getAllGithub } from '../redux/reducers/githubSlice';
import GithubCard from './GithubCard';
import '../App.css';

const GithubListing = () => {
	const { github } = useSelector(getAllGithub);

	let content;
	content = github.incomplete_results === true ? (
		github.items.map((item) => (
			<GithubCard key={item.id} {...item} />
		))
	) : github.isLoading  ? (
		<div>
			<h3>...Loading</h3>
		</div>
	) : (
		<h3>...Data loading</h3>
	);

	return (
		<div className="git-contain">
			<h2>Github Repo</h2>
			<h5>with the most stared repositories</h5>
			<div className="repo-contain">
				<div className="repo-contain-1">
					{content}
				</div>
			</div>
		</div>
	)
}

export default GithubListing
