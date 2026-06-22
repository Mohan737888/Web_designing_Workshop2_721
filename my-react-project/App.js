import React, { useState } from "react";
import "APP.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false }
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Student Task Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      <h3>Total Tasks: {tasks.length}</h3>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              className={task.completed ? "completed" : ""}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;