import React from 'react'

const GithubCard = ({name,owner,description,html_url,open_issues_count,stargazers_count}) => {

	return (
		<ul className="ul-contain">
			<li className="img-contain">
				<img src={owner.avatar_url} alt="" className="img" />
			</li>
			<ul className="ul-list-contain">
				<li><a href={html_url}>{name}</a></li>
				<li><p>{description}</p></li>
				<ul className="last-ul">
					<li className="last-ul-li">Issues: {open_issues_count}</li>
					<li className="last-ul-li">Star No: {stargazers_count}</li>
					<li className="last-ul-li-1">Submitted by: {owner.login}</li>
				</ul>
			</ul>
		</ul>
	)
}

export default GithubCard
