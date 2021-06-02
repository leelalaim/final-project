import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { allProjects } from '../reducers/allProjects'
import { fetchUpload } from '../reducers/allProjects'

export const Upload = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [bootcamp, setBootcamp] = useState("");
  // const [projectName, setProjectName] = useState("");
  // const [url, setUrl] = useState("");
  // const [stack, setStack] = useState("");
  // const [description, setDescription] = useState("");
  // const [week, setWeek] = useState("");



  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(allProjects.actions.setUserName(userName))
    dispatch(fetchUpload(userName));
    // console.log(userName);
    setUserName("");
  }

  // const onSetName = (event) => {
  //   event.preventDefault()
  //   dispatch(game.actions.setUserName(value))
  //   dispatch(generateQuestion(value))
  // };

    return (
        <section>
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            {/* <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="text"
              value={bootcamp}
              onChange={(e) => setBootcamp(e.target.value)} */}
            {/* ></input> */}
            <button
              type="submit"
              onClick={() => {
                console.log('CLICK');
              }}
              >Upload
            </button>
          </form>
        </section>
    )
}