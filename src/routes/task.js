import { Router } from "express";
import {
  createTask,
  deleteTask,
  getOneT,
  getTasks,
  updateTask,
} from "../controllers/taks.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getOneT);

router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
