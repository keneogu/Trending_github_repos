import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { fetchAsyncGithub } from '../redux/reducers/githubSlice';
import {LeftIcon, RightIcon} from '../icons';

const Navbar = () => {
	const [searchTerm, setSearchTerm] = useState("2021-08-13");
	const [count, setCount] = useState(1);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetchAsyncGithub(searchTerm,count));
		setSearchTerm(searchTerm);
	}

	const handleInc = (e) => {
		e.preventDefault();
		let inc = setCount(count + 1);
		dispatch(fetchAsyncGithub(searchTerm,inc));
	}
	console.log(count);

	const handleDec = (e) => {
		e.preventDefault();
	  let dec = 	count > 1 ? setCount(count - 1) : setCount(1);
		dispatch(fetchAsyncGithub(searchTerm,dec));
	}

	return (
		<div>
			<header className="header">
				<div className="heroicon">
					<button className="btn-1" onClick={handleDec}>
						<LeftIcon />
					</button>
					<button className="btn-1" onClick={handleInc}>
						<RightIcon />
					</button>
				</div>
				<div className="form-contain">
					<form onSubmit={handleSubmit}>
						<input type="text" value={searchTerm} placeholder="e.g: YYYY-MM-DD" onChange={handleChange} />
						<button type="submit">Submit</button>
					</form>
				</div>
			</header>
		</div>
	)
}

export default Navbar
