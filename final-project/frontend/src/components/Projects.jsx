import React, { useEffect } from "react";
import { 
  useDispatch, 
  useSelector 
} from "react-redux";

import { fetchProjects } from '../reducers/allProjects';

export const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList)

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <>
      <div>Hello there</div>
      {projects.map((project) => (
        <div>{project.projectName}</div>
      ))}
     </>
  );
};