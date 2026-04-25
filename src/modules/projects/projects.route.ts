import express from "express";
import { projectsController } from "./projects.controller";

const router = express.Router();

// add a project
router.post("/add-project", projectsController.addProjects);

// get all projects
router.get("/get-projects", projectsController.getProjects)

export const projectsRoute = router;
