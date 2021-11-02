import React from "react";
import { TaskListView } from "../../components/TaskListView/TaskListView";

export function HomePage({ error, loading, tasks }) {
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
			<TaskListView loading={loading} tasks={tasks} />
		</div>
	);
}
