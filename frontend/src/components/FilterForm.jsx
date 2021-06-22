import React, { useState } from "react";
import styled from "styled-components/macro";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #f5c81e;
  color: white;
  border-radius: 50px;
  border: none;
  width: 50%;
  padding: 10px;
  font-weight: bold;
  @media (min-width: 768px) {
    width: 25%;
    padding: 15px;
  }
`;

const bootcamps = ["", "Technigo", "LeWagon", "Salt", "Academy", "Other"];

const stacks = [
  "",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "TypeScript",
  "NodeJS",
  "Ruby",
  "Ruby on Rails",
  "Other",
];

const weeks = [
  "",
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 9",
  "Week 10",
  "Week 11",
  "Week 12",
  "Week 13",
  "Week 14",
  "Week 15",
  "Week 16",
  "Week 17",
  "Week 18",
  "Week 19",
  "Week 20",
];

export const FilterForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [filters, setFilters] = useState({
    bootcamp: null,
    stack: null,
    week: null,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setFilters({
      ...filters,
      [name]: event.target.value,
    });
  };

  const onFilterForm = (e) => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <Form onSubmit={onFilterForm}>
      <FormContainer>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="bootcamp">Bootcamp</InputLabel>
          <Select
            native
            value={filters.bootcamp}
            onChange={handleChange}
            inputProps={{
              name: "bootcamp",
              id: "bootcamp",
            }}
          >
            {bootcamps.map((bootcamp) => (
              <option value={bootcamp}>{bootcamp}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="stack">Stack</InputLabel>
          <Select
            native
            value={filters.stack}
            onChange={handleChange}
            inputProps={{
              name: "stack",
              id: "stack",
            }}
          >
            {stacks.map((stack) => (
              <option value={stack}> {stack}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="week">Week</InputLabel>
          <Select
            native
            value={filters.week}
            onChange={handleChange}
            inputProps={{
              name: "week",
              id: "week",
            }}
          >
            {weeks.map((week) => (
              <option value={week}>{week}</option>
            ))}
          </Select>
        </FormControl>
      </FormContainer>
      <Button onClick={onFilterForm} type="submit">
        Filter!
      </Button>
    </Form>
  );
};
