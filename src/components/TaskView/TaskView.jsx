import React from "react";

export function TaskView({ task: { id, title, state } }) {
	return (
		<div className={`list-item ${state}`}>
			<label className='checkbox'>
				<input
					type='checkbox'
					defaultChecked={state === "TASK_ARCHIVED"}
					disabled={true}
					name='checked'
				/>
				<span className='checkbox-custom'></span>
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
					<a>
						<span className={`icon-star`} />
					</a>
				)}
			</div>
		</div>
	);
}
