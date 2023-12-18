import React, { useState, useEffect } from "react";
import TaskList from "./components/TasksList";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTasks = [...tasks, { id: Date.now(), title, completed: false }];
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const storedTasks = localStorage.getItem("tasks");
  useEffect(() => {
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const toggleTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
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
        />
      </div>
    </div>
  );
};

export default App;
