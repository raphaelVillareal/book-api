const express = require("express");
const routes = express.Router();

const { getAllTasks, getTaskById, getTaskByStatus, createTask, updateTask, deleteTask } = require("../controllers/taskController");

routes.get("/tasks", getAllTasks);
routes.get("/tasks/:id", getTaskById);
routes.get("/tasks/status/:status", getTaskByStatus);
routes.post("/tasks", createTask);
routes.put("/tasks/:id", updateTask);
routes.delete("/tasks/:id", deleteTask);

module.exports = routes;
