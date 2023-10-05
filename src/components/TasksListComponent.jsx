import React, { useState } from 'react';
import '../css/TasksList.css';
import FormTakComponent from './FormTakComponent';
import TaskComponent from './TaskComponent';

function TasksListComponent() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		if (task.text.trim()) {
			task.text = task.text.trim();
			const updatedTask = [task, ...tasks];
			setTasks(updatedTask);
		}
	};

	const deleteTask = (taskId) => {
		const updatedTask = tasks.filter((task) => task.taskId !== taskId);
		setTasks(updatedTask);
	};

	const completeTask = (taskId) => {
		const updatedTask = tasks.map((task) => {
			if (task.taskId === taskId) task.complete = !task.complete;
			return task;
		});
		setTasks(updatedTask);
	};

	return (
		<>
			<FormTakComponent onSubmit={addTask} />
			<div className="list-task-container">
				{tasks.map((task) => (
					<TaskComponent
						key={task.taskId}
						taskId={task.taskId}
						text={task.text}
						complete={task.complete}
						completeTask={completeTask}
						deleteTask={deleteTask}
					/>
				))}
			</div>
		</>
	);
}

export default TasksListComponent;
