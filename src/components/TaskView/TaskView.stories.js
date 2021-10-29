import React from "react";

import { TaskView } from "./TaskView";

export default {
	title: "Components/TaskView",
	component: TaskView,
};

const Template = (args) => <TaskView {...args} />;

export const Default = Template.bind({});
Default.args = {
	task: {
		id: "1",
		title: "Test Task",
		state: "TASK_INBOX",
	},
};

export const Pinned = Template.bind({});
Pinned.args = {
	task: {
		...Default.args.task,
		id: "2",
		state: "TASK_PINNED",
	},
};

export const Archived = Template.bind({});
Archived.args = {
	task: {
		...Default.args.task,
		id: "3",
		state: "TASK_ARCHIVED",
	},
};

export const LongTitle = Template.bind({});
LongTitle.args = {
	task: {
		...Default.args.task,
		id: "4",
		title:
			" Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perferendis sequi odio nam nesciunt unde aliquid dolor libero id veniam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laborum debitis? Molestiae rem libero blanditiis expedita placeat rerum doloremque dolores numquam eum obcaecati quibusdam, maxime, quidem corrupti consectetur labore deleniti dolore quos nisi! Explicabo perspiciatis adipisci veritatis magnam molestias deleniti ipsam nesciunt, cumque sint in, rem deserunt ex consequatur voluptatum?",
		state: "TASK_LONGTITLE",
	},
};
