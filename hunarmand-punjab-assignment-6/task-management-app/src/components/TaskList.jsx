import React from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, onToggleComplete, onDeleteTask, onEditTask }) {
  if (!tasks.length) {
    return <p className="info-text">No tasks yet. Add one above!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
