import axios from 'axios';

export const githubAPI = async () => {
	try {
		const response = await axios.get('https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc');
		return response;
	}catch(error) {
		return error;
	}
}
