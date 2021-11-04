import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/counterSlice";
const NumbersPage = () => {
	const count = useSelector(selectCount);
	return (
		<div>
			<h1>Count: {count}</h1>
		</div>
	);
};

export default NumbersPage;
