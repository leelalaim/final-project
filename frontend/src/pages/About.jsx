import React  from 'react'
import styled from "styled-components/macro";

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 100px;
`;

export const About = () => {
    return (
        <Container>
            <h1>About the project</h1>
            <p>
                This page was the product of the Final Project in the Technigo Frontend Bootcamp. We, Laima Duhovnaja, Malin Vannesjö and Hannah Jesinkey, created this page to be able to share the projects that were created during the Bootcamp. The idea extended to include projects from other Bootcamps as we wanted students from all over to be able to take part in the platform. Now you can view projects from other students as well as upload your own and share them with the world! 
            </p>
        </Container>
    )
}