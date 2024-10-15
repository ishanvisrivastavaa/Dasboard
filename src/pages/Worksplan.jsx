import React, { useState } from "react";

const WorkPlan = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newId = tasks.length + 1;
    setTasks([...tasks, { id: newId, ...newTask }]);
    setNewTask({ title: "", description: "", deadline: "" });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-20 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Plan</h2>
      <p className="text-gray-600 mb-6">Overview of tasks and deadlines.</p>

      <form onSubmit={handleAddTask} className="mb-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Task Title
          </label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="deadline"
          >
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            value={newTask.deadline}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="mb-4 p-4 bg-blue-50 rounded-md border-l-4 border-blue-400"
          >
            <h3 className="text-xl font-medium text-gray-700">{task.title}</h3>
            <p className="text-gray-500">{task.description}</p>
            <span className="text-gray-400 text-sm">
              Deadline: {task.deadline}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkPlan;
