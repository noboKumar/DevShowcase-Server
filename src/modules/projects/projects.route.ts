import express from "express";
import { projectsController } from "./projects.controller";
import authMiddleware from "../../middleware/authMiddleware";

const router = express.Router();

// add a project
router.post("/add-project", projectsController.addProjects);

// get all projects
router.get("/get-projects", projectsController.getProjects)

// project  details
router.get("/get-projects/:id", projectsController.getProjectDetails)

// login users projects
router.get("/my-projects", authMiddleware, projectsController.getMyProjects);

// update project data
router.patch("/update-project/:id", projectsController.updateProject);

// delete project data
router.delete("/delete-project/:id", projectsController.deleteProject);

export const projectsRoute = router;
