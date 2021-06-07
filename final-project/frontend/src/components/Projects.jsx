import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "./ProjectsBanner";
import { Footer } from "./Footer";

export const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <>
      <ProjectsBanner />
      <div>All project cards here</div>
      {projects.map((project) => (
        <div>{project.projectName}</div>
      ))}
      <Footer />
    </>
  );
};
