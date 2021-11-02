import React from "react";
import { HomePage } from "./HomePage";

export default {
	title: "Page/Home",
	component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
	error: "",
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
			state: "TASK_PINNED",
		},
		{
			id: "3",
			title: "Task 3",
			state: "TASK_ARCHIVED",
		},
	],
};

export const LoadWithNoTasks = Template.bind({});
LoadWithNoTasks.args = {
	error: "",
	loading: false,
	tasks: [],
};

export const ErrorMsg = Template.bind({});
ErrorMsg.args = {
	error: "Error message goes here",
	loading: false,
	tasks: [],
};
