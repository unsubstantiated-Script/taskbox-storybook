import React from "react";

import { TaskListView } from "./TaskListView";

export default {
	title: "Components/TaskListView",
	component: TaskListView,
};

const Template = (args) => <TaskListView {...args} />;

export const Loading = Template.bind({});
Loading.args = {
	loading: true,
	tasks: [],
};

export const Empty = Template.bind({});
Empty.args = {
	loading: false,
	tasks: [],
};

//No pinned or archived
export const Default = Template.bind({});
Default.args = {
	loading: false,
	tasks: [
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
			state: "TASK_INBOX",
		},
		{
			id: "4",
			title: "Task 4",
			state: "TASK_INBOX",
		},
		{
			id: "5",
			title: "Task 5",
			state: "TASK_INBOX",
		},
		{
			id: "6",
			title: "Task 6",
			state: "TASK_INBOX",
		},
	],
};

//Tesk tasks pinned at top
export const TasksPinnedAtTop = Template.bind({});
TasksPinnedAtTop.args = {
	loading: false,
	tasks: [
		...Default.args.tasks.slice(0, 5),
		{
			id: "6",
			title: "Task 6",
			state: "TASK_PINNED",
		},
	],
};
