import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const task = await Task.findAll();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getOneT = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;

  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  try {
    const data = await Task.findByPk(id);
    data.name = name;
    data.done = done;
    data.projectId = projectId;

    await data.save();

    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Task.destroy({
      where: {
        id,
      },
    });
    console.log(deleted);
    res.status(204);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
