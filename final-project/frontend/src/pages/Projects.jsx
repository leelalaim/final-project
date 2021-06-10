import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "../components/ProjectsBanner";
// import { Footer } from "./Footer";
import { ProjectCard } from "../components/ProjectCard";


const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Projects = () => {
  // Value for input
  const [value, setValue] = useState([]);
  // const [filteredProjects, setFilteredProjects] = useState([])

  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const stacks = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS",
    "Redux",
    "Styled Components",
    "Python",
    "C#",
    "TypeScript",
  ];

  const filter = (e) => {
    e.preventDefault();
    console.log(value);
    dispatch(fetchProjects(value));
  };

  const addOrDeleteItemFromArray = (stack) => {
    if (value.includes(stack)) {
      setValue(value.filter((value) => value !== stack))
    } else {
      setValue(...value, stack);
    }
  }

  return (
    <>
      <ProjectsBanner />
      <form onSubmit={filter}>
        {stacks.map((stack) => (
          <div key={stack}>
            <label key={stack} label={stack}>
              {stack}
            </label>
            <input
              type="checkbox"
              checked={value.includes(stack)}
              onChange={(e) => {
                addOrDeleteItemFromArray(stack);
              }}
            />
          </div>
        ))}
        <button onClick={filter} type="submit">
          Filter!
        </button>
      </form>
         <ProjectCards>
        {projects.map((project) => ( 
          <ProjectCard project={project}/>
        ))}
      </ProjectCards>
    </>
  );
};
