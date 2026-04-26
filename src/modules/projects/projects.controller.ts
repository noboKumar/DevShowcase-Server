import { Request, Response } from "express";
import { projectService } from "./projects.service";
import { auth } from "../../lib/auth";
import { fromNodeHeaders } from "better-auth/node";

const addProjects = async (req: Request, res: Response) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const userId = session.user.id;
    req.body.userId = userId;

    const result = await projectService.addProject(req.body);

    res.status(200).json({
      success: true,
      message: "Project added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getProjects = async (req: Request, res: Response) => {
  try {
    const result = await projectService.getProjects();

    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getProjectDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await projectService.getProjectDetails(id as string);
    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getMyProjects = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const result = await projectService.getMyProjects(userId);

    res.status(200).json({
      success: true,
      message: "My projects fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await projectService.updateProject(id as string, req.body);
    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

export const projectsController = {
  addProjects,
  getProjects,
  getProjectDetails,
  getMyProjects,
  updateProject,
};
