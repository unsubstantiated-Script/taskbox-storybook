import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import HomePage from "./pages/home";

import CounterPage from "./pages/counter/CounterPage";
import NumbersPage from "./pages/numbers/NumbersPage";

function App() {
	return (
		<>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/counter' element={<CounterPage />} />
					<Route path='/numbers' element={<NumbersPage />} />
				</Routes>
			</Provider>
		</>
	);
}

export default App;
