import "./App.css";
import { Route, Routes } from "react-router-dom";

import CounterPage from "./pages/counter/CounterPage";
import NumbersPage from "./pages/numbers/NumbersPage";

function App() {
	return (
		<>
			<Routes>
				<Route path='/counter' element={<CounterPage />} />
				<Route path='/numbers' element={<NumbersPage />} />
			</Routes>
		</>
	);
}

export default App;
