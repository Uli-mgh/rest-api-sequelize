import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const allProjects = await Project.findAll();

    res.json(allProjects);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      description,
      priority,
    });

    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const update = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    const data = await Project.findByPk(id);
    data.name = name;
    data.priority = priority;
    data.description = description;

    await data.save();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const onep = await Project.findOne({
      where: {
        id,
      },
    });

    if (!onep)
      return res.status(404).json({ message: "No se encontro el projecto" });

    res.send(onep);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProjectsTask = async (req, res) => {
  const { id } = req.params;

  const tasks = await Task.findAll({
    where: {
      projectId: id,
    },
  });
  res.status(200).json(tasks);
};
