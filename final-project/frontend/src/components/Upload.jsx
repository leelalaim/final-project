import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { user } from "../reducers/user";
import { uploadProject } from "../reducers/allProjects";

export const Upload = () => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  const [bootcamp, setBootcamp] = useState("");
  const [projectName, setProjectName] = useState("");
  const [url, setUrl] = useState("");
  const [stack, setStack] = useState("");
  const [description, setDescription] = useState("");
  const [week, setWeek] = useState("");

  const email = useSelector((store) => store.user.email);
  console.log(email);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      uploadProject({
        email,
        bootcamp,
        projectName,
        url,
        stack,
        description,
        week,
      })
    );
    // setUserName("");
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        {/* <label>Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input> */}
        {/* <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input> */}
        <label>Bootcamp</label>
        <input
          type="text"
          value={bootcamp}
          onChange={(e) => setBootcamp(e.target.value)}
        ></input>
        <label>Name of project</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        ></input>
        <label>URL to live page</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        ></input>
        <label>Add the stacks</label>
        <input
          type="text"
          value={stack}
          onChange={(e) => setStack(e.target.value)}
        ></input>
        <label>Add a project description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label>Which week of the bootcamp</label>
        <input
          type="text"
          value={week}
          onChange={(e) => setWeek(e.target.value)}
        ></input>
        <button
          type="submit"
          onClick={() => {
            console.log("CLICK");
          }}
        >
          Upload
        </button>
      </form>
    </section>
  );
};
