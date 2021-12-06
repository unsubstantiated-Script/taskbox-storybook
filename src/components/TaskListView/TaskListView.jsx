import React from "react";
import PropTypes from "prop-types";
import { TaskView } from "../TaskView/TaskView";

import { selectTasks, updateTask } from "../../lib/tasksSlice";
import { useSelector, useDispatch } from "react-redux";

export function TaskListView({ loading, tasks }) {
	const storedTasks = useSelector(selectTasks);

	if (storedTasks && storedTasks.length > 0) {
		tasks = storedTasks;
	}

	const dispatch = useDispatch();

	const events = {
		onPinTask: (task) => dispatch(updateTask(task)),
		onArchiveTask: (task) => dispatch(updateTask(task)),
	};

	const loadRow = (
		<div className='loading-item'>
			<span className='glow-checkbox' />
			<span className='glow-text'>
				<span>Loading</span>
				<span>Loading</span>
				<span>Loading</span>
			</span>
		</div>
	);

	const rows = [];

	for (let index = 0; index < 6; index++) {
		rows.push(loadRow);
	}

	if (loading) {
		return <div className='list-items'>{rows}</div>;
	}

	if (tasks.length === 0) {
		return (
			<div className='list-items'>
				<div className='wrapper-message'>
					<span className='icon-check' />
					<div className='title-message'>You have no tasks</div>
					<div className='subtitle-message'>Sit back and relax</div>
				</div>
			</div>
		);
	}

	const tasksInOrder = [
		...tasks.filter((task) => task.state === "TASK_PINNED"),
		...tasks.filter((task) => task.state !== "TASK_PINNED"),
	];

	return (
		<div className='list-items'>
			{tasksInOrder.map((task) => (
				<TaskView key={task.id} task={task} {...events} />
			))}
		</div>
	);
}

// TaskListView.propTypes = {
// 	loading: PropTypes.bool,
// 	tasks: PropTypes.arrayOf(TaskView.propTypes.task).isRequired,
// 	onPinTask: PropTypes.func.isRequired,
// 	onArchiveTask: PropTypes.func.isRequired,
// };

// TaskListView.defaultProps = {
// 	loading: false,
// };
