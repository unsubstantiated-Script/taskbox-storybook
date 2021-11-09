import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "../../redux/counterSlice";
import { Link } from "react-router-dom";

const CounterPage = () => {
	const dispatch = useDispatch();
	const count = useSelector(selectCount);
	return (
		<div className='container'>
			<h1>Counter: {count}</h1>
			<div>
				<button
					className='btn btn-success mx-2'
					onClick={() => dispatch(increment())}>
					Add
				</button>
				<button
					className='btn btn-danger mx-2'
					onClick={() => dispatch(decrement())}>
					Subtract
				</button>
			</div>
			<div>
				<Link to='/numbers'>Bump to Numz</Link>
			</div>
		</div>
	);
};

export default CounterPage;
