import { createStore } from "redux";

//Creating an object to store in state
export const actions = {
	ARCHIVE_TASK: "ARCHIVE_TASK",
	PIN_TASK: "PIN_TASK",
};

//archiving the task in an object
export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
//pinning the task in an object
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

//Updating the state to load up new tasks in various places
function changeState(taskState) {
	return (state, action) => {
		return {
			...state,
			tasks: state.tasks.map((task) => {
				return task.id === action.id ? { ...task, state: taskState } : task;
			}),
		};
	};
}

//Add actions in here...
export const reducer = (state, action) => {
	switch (action.type) {
		case actions.ARCHIVE_TASK:
			return changeState("TASK_ARCHIVED")(state, action);
		case actions.PIN_TASK:
			return changeState("TASK_PINNED")(state, action);
		default:
			return state;
	}
};

const defaultTasks = [
	{
		id: "1",
		title: "Task 1",
		state: "TASK_INBOX",
	},
	{
		id: "2",
		title: "Task 2",
		state: "TASK_INBOX",
	},
	{
		id: "3",
		title: "Task 3",
		state: "TASK_PINNED",
	},
	{
		id: "4",
		title: "Task 4",
		state: "TASK_INBOX",
	},
	{
		id: "5",
		title: "Task 5",
		state: "TASK_ARCHIVED",
	},
];

export default createStore(reducer, { tasks: defaultTasks });
