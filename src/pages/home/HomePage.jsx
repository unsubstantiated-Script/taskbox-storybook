import React from "react";
import PropTypes from "prop-types";
import TaskListView from "../../components/TaskListView";

export function HomePage({ error }) {
	if (error) {
		return (
			<div className='page lists-show'>
				<div className='wrapper-message'>
					<span className='icon-face-sad'></span>
					<div className='title-message'>Oh no!</div>
					<div className='subtitle-message'>{error}</div>
				</div>
			</div>
		);
	}

	return (
		<div className='page lists-show'>
			<nav>
				<h1 className='title-wrapper'>Taskbox - Fall 2021</h1>
			</nav>
			{/* <TaskListView /> */}
		</div>
	);
}

HomePage.propTypes = {
	error: PropTypes.string,
};

HomePage.defaultProps = {
	error: null,
};
