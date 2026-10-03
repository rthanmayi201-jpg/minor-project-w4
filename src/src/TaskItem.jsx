import React from "react";

function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
