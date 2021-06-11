import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "../components/ProjectsBanner";
// import { Footer } from "./Footer";
import { ProjectCard } from "../components/ProjectCard";
// import { FilterForm } from "../components/FilterForm";

// Matierial UI
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const bootcamps = ['', 'Technigo', 'LeWagon', 'Salt', 'Other']
const stacks = ['', 'React', 'JavaScript', 'HTML', 'CSS', 'Python', 'TypeScript', 'NodeJS', 'Other']
const weeks = ['', '1 week', '2 week', '3 week', '4 week', '5 week', '6 week', '7 week', '8 week', '9 week', '10 week']


const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Projects = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bootcamp: '',
    stack: '',
    week: '',
  });

  // Value for input
  const [value, setValue] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([])

  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

 
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    })  
  };


  const filter = (e) => {
    e.preventDefault();
    console.log(value);
    dispatch(fetchProjects(value));
  };

 const addOrDeleteItemFromArray = (stack) => {
    if (value.includes(stack)) {
      setValue(value.filter((value) => value !== stack));
    } else {
      setValue(...value, stack);
    }
  };

  return (
    <>
      <ProjectsBanner />
      <form onSumbit={filter}>
      <FormControl className={classes.formControl}> 
        <InputLabel htmlFor="bootcamp">Bootcamp</InputLabel>
        <Select
          native
          value={state.bootcamp}
          onChange={handleChange}
          inputProps={{
            name: 'bootcamp',
            id: 'bootcamp',
          }}
        >
          {bootcamps.map(bootcamp => (
            <option value={bootcamp}>{bootcamp}</option>
          )
          )}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="stack">Stack</InputLabel>
        <Select
          native
          value={state.stack}
          onChange={handleChange}
          inputProps={{
            name: 'stack',
            id: 'stack',
          }}
        >
          {stacks.map(stack => (
            <option value={stack}> {stack}</option>
          ))}

        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="week">Week</InputLabel>
        <Select
          native
          value={state.week}
          onChange={handleChange}
          inputProps={{
            name: 'week',
            id: 'week',
          }}
        >
          {weeks.map(week => (
            <option value={week}>{week}</option>
          ))}
        </Select>
 
      </FormControl>
      <button onClick={filter} type="submit">
        Filter!
      </button>
      </form>
      <ProjectCards>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </ProjectCards>
    </>
  );
};
