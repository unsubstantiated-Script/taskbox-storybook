import { TaskListView } from "./TaskListView";

// import { connect } from "react-redux";
// import { archiveTask, pinTask } from "../../lib/redux";

export default TaskListView;
//Hides anything that will be archived...
// export default connect(
// 	({ tasks }) => ({
// 		tasks: tasks.filter(
// 			(t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED",
// 		),
// 	}),
// 	(dispatch) => ({
// 		onArchiveTask: (id) => dispatch(archiveTask(id)),
// 		onPinTask: (id) => dispatch(pinTask(id)),
// 	}),
// )(TaskListView);

// export default connect(
// 	({ tasks }) => ({
// 		tasks: tasks.filter(
// 			(t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED",
// 		),
// 	}),
// 	(dispatch) => ({
// 		onArchiveTask: (id) => dispatch(archiveTask(id)),
// 		onPinTask: (id) => dispatch(pinTask(id)),
// 	}),
// )(TaskListView);
