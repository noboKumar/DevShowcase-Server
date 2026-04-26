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

export const projectsRoute = router;
