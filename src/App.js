import './App.css';
import TasksListComponent from './components/TasksListComponent';
import freeCodeCampLog from './img/freecodecamp-logo.png';

function App() {
	return (
		<div className="tasks-application-container">
			<div className="freecodecamp-logo-container">
				<img className="freecodecamp-logo" src={freeCodeCampLog} alt="freeCodeCamp logo" />
			</div>
			<div className="main-list-tasks">
				<h1>Mis Tareas</h1>
				<TasksListComponent />
			</div>
		</div>
	);
}

export default App;
