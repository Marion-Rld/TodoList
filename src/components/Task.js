import React, { useState } from "react";

const Task = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  // Function to handle the edit mode for a task
  const handleEdit = () => {
    setIsEditing(true); // Set the isEditing state to true to enable editing mode
  };

  // Function to handle saving the edited task
  const handleSave = () => {
    editTask(task.id, newTitle); // Call the editTask function to update the task with the new title
    setIsEditing(false); // Set the isEditing state to false to exit editing mode
  };

  return (
    <div className="flex items-center bg-white p-2 my-2 rounded-lg">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="ml-2 mr-2"
      />
      {/* If the task is in editing mode, it renders an input field, otherwise it renders the task title */}
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="flex-1 border rounded-lg px-1 border-gray-400"
        />
      ) : (
        <span className={`flex-1 px-1 ${task.completed ? "line-through" : ""}`}>
          {task.title}
        </span>
      )}
      <button onClick={isEditing ? handleSave : handleEdit} className="mr-2">
        <i
          className={
            isEditing ? "fa-solid fa-check pl-2" : "fa-regular fa-pen-to-square"
          }
        />
      </button>
      <button onClick={() => deleteTask(task.id)} className="mr-2">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
};

export default Task;
