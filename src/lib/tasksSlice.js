import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeRequest } from "../utils/makeRequest";

// const initialState = [
// 	{ id: "1", title: "Task 1", state: "TASK_INBOX" },
// 	{ id: "2", title: "Task 2", state: "TASK_INBOX" },
// 	{ id: "3", title: "Task 3", state: "TASK_INBOX" },
// 	{ id: "4", title: "Task 4", state: "TASK_INBOX" },
// 	{ id: "5", title: "Task 5", state: "TASK_INBOX" },
// ];

const initialState = {
	tasks: [],
};

export const loadTasks = createAsyncThunk("tasks/load", async () => {
	let res = await makeRequest("/api/task/all");
	return res.json();
});

export const updateTask = createAsyncThunk(
	"tasks/load",
	async ({ id, title, state }) => {
		let body = JSON.stringify({
			id,
			title,
			state,
		});
		await makeRequest("/api/task/update", {
			method: "put",
			body,
		});
		return { id, title, state };
	},
);

export const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	// reducers: {
	// 	archiveTask: (state, action) => {
	// 		state.map((task) => {
	// 			if (task.id === action.payload) {
	// 				return (task.state = "TASK_ARCHIVED");
	// 			}
	// 			return null;
	// 		});
	// 	},
	// 	pinTask: (state, action) => {
	// 		state.map((task) => {
	// 			if (task.id === action.payload) {
	// 				task.state = "TASK_PINNED";
	// 			}
	// 			return null;
	// 		});
	// 	},
	// },

	// Tweaks with the redux store
	extraReducers: {
		[loadTasks.fulfilled]: (state, action) => {
			state.tasks = action.payload;
		},
		[updateTask.fulfilled]: (state, action) => {
			// find the matching id sitting in state from the payload coming in from the API
			const index = state.tasks.findIndex((t) => t.id === action.payload.id);
			//Update the redux state's task item with what's in the api payload
			state.tasks[index] = {
				...state.tasks[index],
				...action.payload,
			};
		},
	},
});

export const selectTasks = (state) => state.tasks;
export const { archiveTask, pinTask } = tasksSlice.actions;

export default tasksSlice.reducer;
