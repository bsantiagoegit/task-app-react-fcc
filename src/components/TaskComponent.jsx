import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import '../css/Task.css';

function TaskComponent({ taskId, text, complete, completeTask, deleteTask }) {
	return (
		<div className={complete ? 'container-task complete' : 'container-task'}>
			<div className="text-task" onClick={() => completeTask(taskId)}>
				{text}
			</div>
			<div className="icon-task-container">
				<AiOutlineCloseCircle className="icon-task" onClick={() => deleteTask(taskId)} />
			</div>
		</div>
	);
}

export default TaskComponent;
