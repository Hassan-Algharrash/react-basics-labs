import './App.css';
import Task from './components/Task';


function App() {
  return (
    <div className="container">
  <h1>Tasky</h1>

  <Task title="Dishes" deadline="Today" description="Wash dishes and clean sink" />

  <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away" />

  <Task title="Tidy" deadline="Today" description="Pick up items around the room" />
</div>

  )
}

export default App;
