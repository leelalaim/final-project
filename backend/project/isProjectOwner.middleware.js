import { Project } from './project.db';

export async function isProjectOwner (req, res, next) {
  const { id } = req.params;
  const userId = req.user.id;

  const project = await Project.find({
    _id: id,
  })

  if (!project) {
    res.status(404).send({ message: 'Project not found' });
  }

  if (project.ownerId !== userId) {
    res.status(403).send({ message: 'Only owners can perform that operation' });
  }

  next();
};