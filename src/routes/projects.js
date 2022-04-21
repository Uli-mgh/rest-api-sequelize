import { Router } from "express";
import {
  createProject,
  deleteProject,
  getOne,
  getProjects,
  getProjectsTask,
  update,
} from "../controllers/projects-controller.js";
const router = Router();

router.get("/projects", getProjects);

router.get("/projects/:id", getOne);

router.post("/projects", createProject);

router.put("/projects/:id", update);

router.delete("/projects/:id", deleteProject);

//  Relaciones:

router.get("/projects/:id/tasks", getProjectsTask);

export default router;
