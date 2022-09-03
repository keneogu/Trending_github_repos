import { render } from "@testing-library/react"
import Navbar from '../Components/Navbar'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe("Navbar Component", () => {
	const initialState = { output: 10 };
	const mockStore = configureStore();
	let store;

	it("render input", () => {
		store = mockStore(initialState);
		const {getByTestId} = render(
		<Provider store={store}>
			<Navbar />
		</Provider>);
		const input = getByTestId("searchTerm");
		expect(input).toBeTruthy()
	});
})
