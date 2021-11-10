import React from "react";
import { HomePage } from "./HomePage";
import { Provider } from "react-redux";
//Mock up our Redux store...
import { action } from "@storybook/addon-actions";
import * as TaskListStories from "../../components/TaskListView/TaskListView.stories";

const store = {
	getState: () => {
		return {
			tasks: TaskListStories.Default.args.tasks,
		};
	},
	subscribe: () => 0,
	dispatch: action("dispatch"),
};

export default {
	title: "Page/Home",
	component: HomePage,
	decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
/*Now using Redux...yay...
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
*/

export const ErrorMsg = Template.bind({});
ErrorMsg.args = {
	error: "Error message goes here",
};
