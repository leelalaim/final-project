import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { uploadProject } from "../reducers/allProjects";
import { UploadBanner } from "../components/UploadBanner";
import { Redirect } from "react-router-dom";
import { Loading } from "../components/Loading";

const Section = styled.section`
  height: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding: 10px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
`;

const Button = styled.button`
  background-color: #f5c81e;
  color: white;
  border-radius: 50px;
  border: none;
  width: 50%;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const Upload = () => {
  const dispatch = useDispatch();
  const [bootcamp, setBootcamp] = useState("");
  const [projectName, setProjectName] = useState("");
  const [url, setUrl] = useState("");
  const [stack, setStack] = useState("");
  const [description, setDescription] = useState("");
  const [week, setWeek] = useState("");
  const [projectImage, setProjectImage] = useState("");

  const fileInput = useRef();

  const projectUploadSuccess = useSelector(
    (store) => store.allProjects.projectUploadSuccess
  );
  const isLoading = useSelector((store) => store.ui.isLoading);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", fileInput.current.files[0]);
    formData.append("bootcamp", bootcamp);
    formData.append("projectName", projectName);
    formData.append("url", url);
    formData.append("stack", stack);
    formData.append("description", description);
    formData.append("week", week);
    formData.append("projectImage", projectImage);
    dispatch(uploadProject(formData));
    // redirect()
  };

  return (
    <>
      {projectUploadSuccess && (
        <Redirect
          to={{
            pathname: "/projects",
            // state: { from: location }
          }}
        />
      )}
      <UploadBanner />
      <Section>
        <Form onSubmit={onFormSubmit}>
          <Input
            type="text"
            value={bootcamp}
            placeholder="Bootcamp"
            onChange={(e) => setBootcamp(e.target.value)}
          ></Input>
          {/* <label>Name of project</label> */}
          <Input
            type="text"
            value={projectName}
            placeholder="Project name"
            onChange={(e) => setProjectName(e.target.value)}
          ></Input>
          {/* <label>URL to live page</label> */}
          <Input
            type="text"
            value={url}
            placeholder="URL to live page"
            onChange={(e) => setUrl(e.target.value)}
          ></Input>
          {/* <label>Add the stacks</label> */}
          <Input
            type="text"
            value={stack}
            placeholder="Stack"
            onChange={(e) => setStack(e.target.value)}
          ></Input>
          {/* <label>Which week of the bootcamp</label> */}
          <Input
            type="text"
            value={week}
            placeholder="Week"
            onChange={(e) => setWeek(e.target.value)}
          ></Input>
          <Input
            type="file"
            value={projectImage}
            ref={fileInput}
            placeholder="Upload Image"
            onChange={(e) => setProjectImage(e.target.value)}
          ></Input>
          {/* <label>Add a project description</label> */}
          <TextArea
            type="text"
            value={description}
            placeholder="Decription"
            rows="4"
            cols="1"
            onChange={(e) => setDescription(e.target.value)}
          ></TextArea>
          <Button
            type="submit"
            onClick={() => {
              console.log("CLICK");
            }}
          >
            Upload
          </Button>
        </Form>
        {isLoading && <Loading />}
      </Section>
    </>
  );
};

