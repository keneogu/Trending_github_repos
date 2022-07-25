import React from 'react';
import { removeItem } from '../redux/reducers/githubSlice';
import { useDispatch } from 'react-redux';

const GithubCard = ({id,name,owner,description,html_url,open_issues_count,stargazers_count}) => {
	const dispatch = useDispatch();

	const deleteItem = () => {
		dispatch(removeItem(id));
	}

	return (
		<ul className="ul-contain">
			<li className="img-contain">
				<img src={owner.avatar_url} alt="" className="img" />
			</li>
			<div className="split-card">
			<ul className="ul-list-contain">
				<li><a href={html_url}>{name}</a></li>
				<li><p>{description}</p></li>
				<ul className="last-ul">
					<li className="last-ul-li">Issues: {open_issues_count}</li>
					<li className="last-ul-li">Star No: {stargazers_count}</li>
					<li className="last-ul-li-1">Submitted by: {owner.login}</li>
				</ul>
			</ul>
			<button className="remove-btn" onClick={deleteItem}>Remove</button>
			</div>
		</ul>
	)
}

export default GithubCard
