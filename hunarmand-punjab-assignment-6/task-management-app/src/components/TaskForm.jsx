import React, { useEffect, useState } from 'react';

function TaskForm({ onAddTask, onUpdateTask, editingTask, onCancelEdit }) {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      onUpdateTask(editingTask.id, title.trim());
    } else {
      onAddTask(title.trim());
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-row">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={editingTask ? 'Edit task title...' : 'Add a new task...'}
          className="task-input"
        />
        <button type="submit" className="btn primary">
          {editingTask ? 'Update' : 'Add'}
        </button>
        {editingTask && (
          <button
            type="button"
            className="btn secondary"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
