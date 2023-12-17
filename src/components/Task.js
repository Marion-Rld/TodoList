import React from "react";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="flex items-center bg-white p-2 my-2 rounded-lg">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="ml-2 mr-2"
      />
      <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)} className="mr-2">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default Task;
