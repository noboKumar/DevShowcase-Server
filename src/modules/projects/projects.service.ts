import { prisma } from "../../lib/prisma";
import { project } from "../../types";

const addProject = async (payload: project) => {
  const {
    title,
    userId,
    description,
    category,
    githubRepo,
    liveLink,
    techStack,
    thumbnail,
  } = payload;
  const result = await prisma.projects.create({
    data: {
      title,
      userId,
      description,
      category,
      techStack,
      thumbnail,
      githubRepo,
      liveLink,
    },
  });
  return result;
};

export const projectService = {
  addProject,
};
