import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleTask, deleteTask, editTask }) => {
  return (
    <div>
      {/* Map through the tasks array and render a Task component for each task */}
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
