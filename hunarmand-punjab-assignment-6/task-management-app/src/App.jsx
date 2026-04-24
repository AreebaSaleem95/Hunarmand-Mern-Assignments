import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.get(API_URL, {
          params: { _limit: 10 }
        });
        setTasks(response.data);
      } catch (err) {
        setError('Failed to load tasks. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = async (title) => {
    if (!title.trim()) return;
    try {
      setError('');
      const response = await axios.post(API_URL, {
        title,
        completed: false,
        userId: 1
      });

      const newTask = {
        ...response.data,
        id: Date.now()
      };

      setTasks((prev) => [newTask, ...prev]);
    } catch (err) {
      setError('Failed to add task. Please try again.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      setError('');
      await axios.delete(`${API_URL}/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      if (editingTask && editingTask.id === id) {
        setEditingTask(null);
      }
    } catch (err) {
      setError('Failed to delete task. Please try again.');
    }
  };

  const handleToggleComplete = async (id) => {
    try {
      setError('');
      const taskToToggle = tasks.find((task) => task.id === id);
      if (!taskToToggle) return;

      const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

      await axios.put(`${API_URL}/${id}`, updatedTask);

      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch (err) {
      setError('Failed to update task. Please try again.');
    }
  };

  const handleStartEdit = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async (id, title) => {
    if (!title.trim()) return;

    try {
      setError('');
      const existingTask = tasks.find((task) => task.id === id);
      if (!existingTask) return;

      const updatedTask = { ...existingTask, title };

      await axios.put(`${API_URL}/${id}`, updatedTask);

      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );
      setEditingTask(null);
    } catch (err) {
      setError('Failed to update task. Please try again.');
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Management App</h1>
        <p>Simple CRUD app using React, Axios & JSONPlaceholder.</p>
      </header>

      <main className="app-main">
        <section className="card">
          <TaskForm
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            editingTask={editingTask}
            onCancelEdit={handleCancelEdit}
          />

          {loading && <p className="info-text">Loading tasks...</p>}
          {error && <p className="error-text">{error}</p>}

          <TaskList
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
            onEditTask={handleStartEdit}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
