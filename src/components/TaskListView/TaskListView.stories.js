import React from "react";
import * as TaskStories from "../TaskView/TaskView.stories";
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
			...TaskStories.Default.args.tasks,
			id: "1",
			title: "Test Task 1",
		},
		{
			...TaskStories.Default.args.tasks,
			id: "2",
			title: "Test Task 2",
		},
		{
			...TaskStories.Default.args.tasks,
			id: "3",
			title: "Test Task 3",
		},
		{
			...TaskStories.Default.args.tasks,
			id: "4",
			title: "Test Task 4",
		},
		{
			...TaskStories.Default.args.tasks,
			id: "5",
			title: "Test Task 5",
		},
		{
			...TaskStories.Default.args.tasks,
			id: "6",
			title: "Test Task 6",
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
