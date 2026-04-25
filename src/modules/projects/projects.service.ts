import { prisma } from "../../lib/prisma";
import { project } from "../../types";

const addProject = async (payload: project) => {
  const result = await prisma.projects.create({
    data: {
      ...payload,
    },
  });
  return result;
};

const getProjects = async () => {
  const result = await prisma.projects.findMany();
  return result;
};

export const projectService = {
  addProject,
  getProjects,
};
