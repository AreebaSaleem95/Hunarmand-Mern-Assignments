import React from 'react';

function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
  return (
    <li className="task-item">
      <label className="task-item-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
        />
        <span className={task.completed ? 'task-title completed' : 'task-title'}>
          {task.title}
        </span>
      </label>
      <div className="task-item-actions">
        <button
          className="btn small"
          type="button"
          onClick={() => onEditTask(task)}
        >
          Edit
        </button>
        <button
          className="btn small danger"
          type="button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
