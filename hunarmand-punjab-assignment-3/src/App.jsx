import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f0f4f8",
      minHeight: "100vh",
      paddingTop: "50px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#1e3a8a" }}>✨ My React To-Do List ✨</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px"
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </div>

      <ul style={{
        listStyle: "none",
        padding: 0,
        width: "300px"
      }}>
        {tasks.map((t, index) => (
          <li key={index} style={{
            background: "white",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "#ef4444",
                border: "none",
                color: "white",
                padding: "5px 10px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;