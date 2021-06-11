// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const bootcamps = ['', 'Technigo', 'LeWagon', 'Salt', 'Other']
// const stacks = ['', 'React', 'JavaScript', 'HTML', 'CSS', 'Python', 'TypeScript', 'NodeJS', 'Other']
// const weeks = ['', '1 week', '2 week', '3 week', '4 week', '5 week', '6 week', '7 week', '8 week', '9 week', '10 week']

// export const FilterForm = ({ onClick }) => {
//   const [value, setValue] = useState([]);
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     bootcamp: '',
//     stack: '',
//     week: '',
//   });

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };

//   return (
//     <form>
//       <FormControl className={classes.formControl}> 
//         <InputLabel htmlFor="bootcamp">Bootcamp</InputLabel>
//         <Select
//           native
//           value={state.bootcamp}
//           onChange={handleChange}
//           inputProps={{
//             name: 'bootcamp',
//             id: 'bootcamp',
//           }}
//         >
//           {bootcamps.map(bootcamp => (
//             <option value={bootcamp}>{bootcamp}</option>
//           )
//           )}
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="stack">Stack</InputLabel>
//         <Select
//           native
//           value={state.stack}
//           onChange={handleChange}
//           inputProps={{
//             name: 'stack',
//             id: 'stack',
//           }}
//         >
//           {stacks.map(stack => (
//             <option value={stack}> {stack}</option>
//           ))}

//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="week">Bootcamp week</InputLabel>
//         <Select
//           native
//           value={state.week}
//           onChange={handleChange}
//           inputProps={{
//             name: 'week',
//             id: 'week',
//           }}
//         >
//           {weeks.map(week => (
//             <option value={week}>{week}</option>
//           ))}
//         </Select>
 
//       </FormControl>
//       <button onClick={fil} type="submit">
//         Filter!
//       </button>
//     </form>
//   );
// }
