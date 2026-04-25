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

export const projectsController = {
  addProjects,
};
