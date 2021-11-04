import React from "react";

const CounterPage = () => {
	return (
		<>
			<h1>Counter: </h1>
			<div>
				<button onClick={console.log("test")}>Add</button>
				<button onClick={console.log("test")}>Subtract</button>
			</div>
		</>
	);
};

export default CounterPage;
