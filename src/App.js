import "./App.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadTasks } from "./lib/tasksSlice";
import HomePage from "./pages/home";

// import CounterPage from "./pages/counter/CounterPage";
// import NumbersPage from "./pages/numbers/NumbersPage";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadTasks());
	}, [dispatch]);

	return (
		<>
			<HomePage />
			{/* 
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/counter' element={<CounterPage />} />
								<Route path='/numbers' element={<NumbersPage />} />
							</Routes>
						 */}{" "}
		</>
	);
}

export default App;
