import Project from '../models/project.js';

// @desc   Create a new project
export const createProject = async (req, res) => {
  try {
    const { title, location, urls } = req.body;
    const project = new Project({ title, location, urls });
    await project.save();
    res.status(201).json({ message: "Project added successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Failed to create project", error });
  }
};

// @desc   Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
};

// @desc   Update a project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Project updated", updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Failed to update project", error });
  }
};

// @desc   Delete a project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete project", error });
  }
};
