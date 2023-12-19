import React, { useState, useEffect } from "react";
import TaskList from "./components/TasksList";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Load tasks from local storage when the component mounts
  const storedTasks = localStorage.getItem("tasks");

  useEffect(() => {
    if (storedTasks) {
      // Set the tasks state to the tasks stored in local storage
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Add a new task to the tasks array
  const addTask = (title) => {
    // Create a new array of tasks with the new task object added to the end
    const newTasks = [...tasks, { id: Date.now(), title, completed: false }];
    setTasks(newTasks);
  };

  // Toggle the completed status of a task
  const toggleTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Delete a task from the tasks array
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Edit the title of a task
  const editTask = (id, newTitle) => {
    // Map through the tasks array, and if the task id matches the id of the task being edited, update the title
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-purple-500 to-red-400 min-h-screen">
      <h1 className="text-5xl font-bold my-5 text-white">Todo List</h1>
      <div className="w-full max-w-md">
        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
};

export default App;
