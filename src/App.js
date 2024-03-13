import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task List</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
