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

const getProjects = async (featured?: boolean) => {
  const result = await prisma.projects.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
  if (featured) {
    return result.slice(0, 3);
  }
  return result;
};

const getProjectDetails = async (id: string) => {
  const result = await prisma.projects.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const getMyProjects = async (userId: string) => {
  const result = await prisma.projects.findMany({
    where: {
      userId: userId,
    },
  });
  return result;
};

const updateProject = async (id: string, payload: project) => {
  const result = await prisma.projects.update({
    where: {
      id: id,
    },
    data: {
      ...payload,
    },
  });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await prisma.projects.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const projectService = {
  addProject,
  getProjects,
  getProjectDetails,
  getMyProjects,
  updateProject,
  deleteProject,
};
