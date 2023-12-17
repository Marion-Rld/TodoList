import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
        className="w-5/6 rounded-l-lg p-2 border-t border-b border-l text-gray-800 border-gray-200 bg-white"
      />
      <button
        type="submit"
        className="w-1/6 rounded-r-lg bg-blue-200 text-gray-800 font-bold p-2 shadow-md hover:bg-blue-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
