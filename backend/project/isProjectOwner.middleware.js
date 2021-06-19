import { Project } from './project.db';

export async function isProjectOwner (req, res, next) {
  const { id } = req.params;
  const userId = req.user.id;

  const project = await Project.findById(id);
  if (!project) {
    res.status(404).json({ message: 'Project not found' });
    return;
  }

  if (project.ownerId !== userId) {
    res.status(403).json({ message: 'Only owners can perform that operation' });
    return;
  }

  next();
};