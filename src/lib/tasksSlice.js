import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: "1", title: "Task 1", state: "TASK_INBOX" },
	{ id: "2", title: "Task 2", state: "TASK_INBOX" },
	{ id: "3", title: "Task 3", state: "TASK_INBOX" },
	{ id: "4", title: "Task 4", state: "TASK_INBOX" },
	{ id: "5", title: "Task 5", state: "TASK_INBOX" },
];

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		archiveTask: (state, action) => {
			state.map((task) => {
				if (task.id === action.payload) {
					task.state = "TASK_ARCHIVED";
				}
			});
		},
		pinTask: (state, action) => {
			state.map((task) => {
				if (task.id === action.payload) {
					task.state = "TASK_PINNED";
				}
			});
		},
	},
});

export const selectTasks = (state) => state.tasks;
export const { archiveTask, pinTask } = tasksSlice.actions;

export default tasksSlice.reducer;
