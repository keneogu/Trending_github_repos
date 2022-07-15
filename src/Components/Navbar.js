import React from 'react';
import {LeftIcon, RightIcon} from '../icons';

const Navbar = () => {


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
