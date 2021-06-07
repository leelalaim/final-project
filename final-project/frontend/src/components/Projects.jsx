import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "./ProjectsBanner";
import { Footer } from "./Footer";

export const Projects = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const projects = useSelector((store) => store.allProjects.projectList)
=======
  const projects = useSelector((store) => store.allProjects.projectList);
>>>>>>> 66c2c44efaea80d5c721ff28fecb5088cf15e6b3

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
