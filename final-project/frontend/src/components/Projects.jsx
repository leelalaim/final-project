import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "./ProjectsBanner";
import { Footer } from "./Footer";

const ProjectCards = styled.div`
  display: flex;
`

const ProjectCard = styled.div`
  border: 1px black solid;
`

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

  // Create an array of choices
  // Put input fields for each stack by mapping over array to render it. (Now in local state then move it into Redux.)
  // Create a function to store the value from the input into the local state
  // Use the local state to filter with the value

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
              value={stack}
              onChange={(e) => {
                setValue(...value,e.target.value)
              }}
            />
          </div>
        ))}
        <button onClick={filter} type="submit">
          Filter!
        </button>
      </form>
      <div>All project cards here</div>
      <ProjectCards >
      {projects.map((project) => (
        <Popup trigger={
          <div>
            <h3>{project.projectName}</h3>
            <button> Trigger</button>
          </div>
        } position="center center">
          <ProjectCard>
            <h3>{project.bootcamp}</h3>
            <p>{project.bootcamp}</p>
            <p>{project.stack}</p>
          </ProjectCard>
        </Popup>
      ))}
      </ProjectCards>
    </>
  );
};