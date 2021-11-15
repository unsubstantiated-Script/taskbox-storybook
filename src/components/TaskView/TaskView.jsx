import React from "react";
import PropTypes from "prop-types";

export function TaskView({
	task: { id, title, state },
	onPinTask,
	onArchiveTask,
}) {
	return (
		<div className={`list-item ${state}`}>
			<label className='checkbox'>
				<input
					type='checkbox'
					checked={state === "TASK_ARCHIVED"}
					disabled={true}
					name='checked'
				/>
				<span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
			</label>
			<div className='title'>
				<input
					type='text'
					value={title}
					readOnly={true}
					placeholder='Input Title'
				/>
			</div>
			<div className='actions'>
				{state !== "TASK_ARCHIVED" && (
					<div onClick={() => onPinTask(id)}>
						<span className={`icon-star`} />
					</div>
				)}
			</div>
		</div>
	);
}

TaskView.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		state: PropTypes.string,
	}).isRequired,
	onPinTask: PropTypes.func.isRequired,
	onArchiveTask: PropTypes.func.isRequired,
};
