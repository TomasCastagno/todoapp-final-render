const { Router } = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTasksWithCategories,
} = require("../controllers/tasks.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/tasks", authMiddleware, getAllTasks);

router.get("/tasks/:id", authMiddleware, getTaskById);

// obtener un usuario con su categoría
router.get("/tasks/:id/categories", authMiddleware, getTasksWithCategories);

router.post("/tasks", authMiddleware, createTask);

router.put("/tasks/:id", authMiddleware, updateTask);

router.delete("/tasks/:id", authMiddleware, deleteTask);

module.exports = router;
