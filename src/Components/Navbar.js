import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
// import { fetchAsyncGithub } from '../redux/reducers/githubSlice';
import {LeftIcon, RightIcon} from '../icons';

const Navbar = () => {
	const [searchTerm, setSearchTerm] = useState("")
	const dispatch = useDispatch();

	const handleChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	}


	return (
		<div>
			<header className="header">
				<div className="heroicon">
					<LeftIcon />
					<RightIcon />
				</div>
				<div className="form-contain">
					<form onSubmit={handleSubmit}>
						<input type="text" value={searchTerm} placeholder="e.g: 2021-13-08" onChange={handleChange} />
						<button type="submit">Submit</button>
					</form>
				</div>
			</header>
		</div>
	)
}

export default Navbar
