import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../css/FormTask.css';

function FormTakComponent(props) {
	const [input, setInput] = useState('');

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const handleShipping = (event) => {
		event.preventDefault();
		const newTask = { taskId: uuidv4(), text: input, complete: false };
		props.onSubmit(newTask);
	};

	return (
		<form className="form-task" onSubmit={handleShipping}>
			<input className="input-task" type="text" placeholder="Add a new task" name="text" onChange={handleChange} />
			<button className="button-task">Add Task</button>
		</form>
	);
}

export default FormTakComponent;
