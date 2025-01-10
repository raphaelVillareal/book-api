const { tasks } = require('../models/taskModel');

const getAllTasks = async (req, res) => {
  try {
    if (tasks.length > 0) {
      res.status(200).json({
        message: "Tasks retrieved successfully",
        data: tasks,
      });
    } else {
      res.status(404).json({ message: "No tasks found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;

    const task = tasks.find(task => task.id === parseInt(id)); 
    if (task) {
      res.status(200).json({
        message: "Task retrieved successfully",
        data: task,
      });
    } else {
      res.status(404).json({ message: `No task found with ID: ${id}` });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};


const getTaskByStatus = async (req, res) => {
  try {
    const { status } = req.params;

  
    const filteredTasks = tasks.filter(task => task.status.toLowerCase() === status.toLowerCase());

    if (filteredTasks.length > 0) {
      res.status(200).json({
        message: "Tasks retrieved successfully",
        data: filteredTasks,
      });
    } else {
      res.status(404).json({ message: `No tasks found with status: ${status}` });
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};


const createTask = async (req, res) => {
  try {
    const { title, description, status, due_date } = req.body;

    if (!title || !description || !status || !due_date) {
      return res
        .status(400)
        .json({ message: "All fields are required to create a task" });
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      status,
      due_date,
    };

    tasks.push(newTask);

    res.status(201).json({
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status, due_date } = req.body;

    const task = tasks.find(task => task.id === parseInt(id));
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.due_date = due_date || task.due_date;

    res.status(200).json({
      message: "Task updated successfully",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};


const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(index, 1);

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = { getAllTasks,getTaskById, getTaskByStatus, createTask, updateTask, deleteTask };
