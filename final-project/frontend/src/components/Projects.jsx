import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjects } from "../reducers/allProjects";
import { ProjectsBanner } from "./ProjectsBanner";
import { Footer } from "./Footer";

export const Projects = () => {
  // Value for input
  const [value, setValue] = useState('')
  // const [filteredProjects, setFilteredProjects] = useState([])

  const dispatch = useDispatch();
  const projects = useSelector((store) => store.allProjects.projectList.filter((item) => item === value))
  
    


  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const stacks = ['React', 'JavaScript', 'HTML5', 'CSS', 'Redux', 'Styled Components', 'Python', 'C#', 'TypeScript']

  // const filterOnClick = (value) => {
  //   if (value === "See all") {
  //     setFilteredProducts(projects)
  //   } else if (value === {}) {
  //     setFilteredProducts(products.filter(product => product.fields.category === value))
  //   } else if () {

  //   }
  // }

  // Create an array of choices
  // Put input fields for each stack by mapping over array to render it. (Now in local state then move it into Redux.)
  // Create a function to store the value from the input into the local state
  // Use the local state to filter with the value

  return (
    <>
    <ProjectsBanner />
      {stacks.map((stack) => (
        <div key={stack}>
          <label 
            key={stack}
            label={stack}
          >{stack}</label>
          <input 
            type='checkbox'
            value={stack}
            onChange={(e) => {
                setValue(e.target.value)            
            }}
          />
        </div>
        
  ))}
      <div>All project cards here</div>
      {projects.map((project) => (
        <>
          <h3>{project.bootcamp}</h3>
          {/* <p>{project.bootcamp}</p>
          <p>{project.stack}</p> */}
        </>
      ))}     
      <Footer />
    </>
  )
  
};



{/* <CheckBox
type="checkbox"
checked={todo.isComplete}
onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
color="primary"
inputProps={{ 'aria-label': 'secondary checkbox' }}
/> */}

// const ageGroup = ["18-25", "26-35", "35+"];

//  <div className='age-group'>
//             <h1 tabIndex="0" className='radio-heading'>What is your age?</h1>
//             {ageGroup.map(group => (
//                 <label
//                 key={group}
//                 label='age'
//                 className='radio-container'
//                 >
//                     <input  
//                         name='age'
//                         className='radio-btn'
//                         type="radio" 
//                         value={group} 
//                         onChange={onAgeChange}
//                     />
//                     <span tabIndex="0" class="checkmark"></span>
//                     {group}
//                 </label>
//             ))}
//         </div>


// const ageGroup = ["18-25", "26-35", "35+"];

// const tasks = useSelector((store) => store.todos.tasks);
// const tasksLeft = tasks.filter((task) => task.isComplete === false);


// <div className="task-wrapper">
// {tasks.map((todo) => (
//   <div key={todo.id} className="task" id="task">
//     <span
//       className="delete-button"
//       onClick={() => dispatch(todos.actions.removeTask(todo.id))}
//     >
//       <FaTrashAlt />
//     </span>
//     <div className="task-and-checkbox">
//       <p>{todo.description}</p>

//       <Checkbox
//         type="checkbox"
//         size="medium"
//         color="primary"
//         checked={todo.isComplete}
//         onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
//       />
//     </div>
//   </div>