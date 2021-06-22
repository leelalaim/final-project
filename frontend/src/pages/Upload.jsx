import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";
import { uploadProject } from "../reducers/allProjects";
import { UploadBanner } from "../components/UploadBanner";
import { Redirect } from "react-router-dom";
import { Loading } from "../components/Loading";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Section = styled.section`
  @media (min-width: 767px) {
    width: 65%;
    margin: 0 auto;
  }
  @media (min-width: 1280px) {
    width: 50%;
    margin: 0 auto;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px;
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
  align-items: center;
  @media (min-width: 768px) {
    width: 25%;
    padding: 15px;
    font-size: 17px;
  }
`;

const ButtonWrapper = styled.div `
  display: flex;
  justify-content: center;
`

export const Upload = () => {
  const dispatch = useDispatch();
  const [bootcamp, setBootcamp] = useState("");
  const [projectName, setProjectName] = useState("");
  const [url, setUrl] = useState("");
  const [github, setGitHub] = useState("");
  const [stack, setStack] = useState("");
  const [description, setDescription] = useState("");
  const [week, setWeek] = useState("");
  const [projectImage, setProjectImage] = useState("");

  const fileInput = useRef();

  const projectUploadSuccess = useSelector(
    (store) => store.allProjects.projectUploadSuccess
  );

  if (projectUploadSuccess) {
    toast.success("You have successfully uploaded a project!");
  }

  const isLoading = useSelector((store) => store.ui.isLoading);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", fileInput.current.files[0]);
    formData.append("bootcamp", bootcamp);
    formData.append("projectName", projectName);
    formData.append("url", url);
    formData.append("github", github);
    formData.append("stack", stack);
    formData.append("description", description);
    formData.append("week", week);
    formData.append("projectImage", projectImage);
    dispatch(uploadProject(formData));
  };

  return (
    <>
      {isLoading && <Loading />}
      {projectUploadSuccess && (
        <Redirect
          to={{
            pathname: "/projects",
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
          <Input
            type="text"
            value={projectName}
            placeholder="Project name"
            onChange={(e) => setProjectName(e.target.value)}
          ></Input>
          <Input
            type="text"
            value={url}
            placeholder="URL to live page"
            onChange={(e) => setUrl(e.target.value)}
          ></Input>
          <Input
            type="text"
            value={github}
            placeholder="URL to GitHub repository"
            onChange={(e) => setGitHub(e.target.value)}
          ></Input>
          <Input
            type="text"
            value={stack}
            placeholder="Stack"
            onChange={(e) => setStack(e.target.value)}
          ></Input>
          <Input
            type="text"
            value={week}
            placeholder="Week (write in the following format 'Week 8')"
            onChange={(e) => setWeek(e.target.value)}
          ></Input>
          <Input
            type="file"
            value={projectImage}
            ref={fileInput}
            placeholder="Upload Image"
            onChange={(e) => setProjectImage(e.target.value)}
          ></Input>
          <TextArea
            type="text"
            value={description}
            placeholder="Decription"
            rows="4"
            cols="1"
            onChange={(e) => setDescription(e.target.value)}
          ></TextArea>
          <ButtonWrapper>
             <Button
            type="submit"
            onClick={() => {
              console.log("CLICK");
            }}
          >
            Upload
          </Button>
          </ButtonWrapper>
         
        </Form>
      </Section>
    </>
  );
  // }
};
