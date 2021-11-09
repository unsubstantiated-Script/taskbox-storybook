import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/counterSlice";
import { Link } from "react-router-dom";
const NumbersPage = () => {
	const count = useSelector(selectCount);
	return (
		<div className='container'>
			<div>
				<h1>Numbz: {count}</h1>
			</div>
			<div>
				<Link to='/counter'>Bump to Cowtnz</Link>
			</div>
		</div>
	);
};

export default NumbersPage;
